import type { BrandTheme } from '@/types/theme'
import { activeLaunchThemeQuery } from '@/lib/sanity/queries'
import { getSanityConfig } from '@/lib/sanity/client'
import { getMockBrandTheme, normalizeHexColor } from '@/lib/theme/brand'

interface SanityLaunchThemeResult {
    _id: string
    title: string
    slug?: {
        current?: string
    }
    brandPrimaryColor: string
    productName: string
    productImage?: {
        public_id?: string
        secure_url?: string
        width?: number
        height?: number
        format?: string
        version?: number
    }
}

interface SanityQueryResponse<T> {
    result: T
}

/**
 * Maps a Sanity launch theme document into the app theme model.
 *
 * @param document - Raw Sanity document.
 * @returns App theme data.
 */
function mapSanityThemeToBrandTheme(
    document: SanityLaunchThemeResult,
): BrandTheme {
    return {
        id: document.slug?.current || document._id,
        name: document.title,
        primaryColor: normalizeHexColor(document.brandPrimaryColor),
        productName: document.productName,
        baseImageUrl: '/images/product-bottle.png',
        cloudinaryPublicId: document.productImage?.public_id || '',
        cloudinarySecureUrl: document.productImage?.secure_url,
    }
}

/**
 * Fetches the active launch theme from Sanity over the HTTP Query API.
 *
 * @returns The active brand theme.
 */
export async function getActiveBrandTheme(): Promise<BrandTheme> {
    const { projectId, dataset, apiVersion } = getSanityConfig()

    const endpoint = new URL(
        `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`,
    )

    endpoint.searchParams.set('query', activeLaunchThemeQuery)

    const response = await fetch(endpoint.toString(), {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        cache: 'no-store',
    })

    if (!response.ok) {
        throw new Error(`Sanity query failed with status ${response.status}`)
    }

    const payload =
        (await response.json()) as SanityQueryResponse<SanityLaunchThemeResult | null>

    if (!payload.result) {
        return getMockBrandTheme()
    }

    return mapSanityThemeToBrandTheme(payload.result)
}