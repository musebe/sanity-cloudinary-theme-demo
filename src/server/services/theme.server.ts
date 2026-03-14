import type { BrandTheme } from "@/types/theme"
import { getMockBrandTheme } from "@/lib/theme/brand"

/**
 * Loads the active brand theme on the server.
 *
 * @remarks
 * This uses mock data in Section 2.
 * In a later section this will fetch from Sanity.
 *
 * @returns The active brand theme.
 */
export function getActiveBrandTheme(): BrandTheme {
    return getMockBrandTheme()
}