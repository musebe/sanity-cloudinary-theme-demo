import type { BrandTheme, CloudinaryAssetValue } from '@/types/theme'
import { createSanityClient } from '@/lib/sanity/client'
import { activeLaunchThemeQuery } from '@/lib/sanity/queries'
import { getMockBrandTheme, normalizeHexColor } from '@/lib/theme/brand'

interface SanityLaunchThemeResult {
    _id: string
    title: string
    slug?: {
        current?: string
    }
    brandPrimaryColor: string
    productName: string
    productImage?: CloudinaryAssetValue
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
 * Loads the active brand theme on the server.
 *
 * @remarks
 * Falls back to local mock data if Sanity returns nothing.
 *
 * @returns The active brand theme.
 */
export async function getActiveBrandTheme(): Promise<BrandTheme> {
    const client = createSanityClient()
    const document =
        await client.fetch<SanityLaunchThemeResult | null>(activeLaunchThemeQuery)

    if (!document) {
        return getMockBrandTheme()
    }

    return mapSanityThemeToBrandTheme(document)
}