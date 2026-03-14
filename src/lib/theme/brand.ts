import type { BrandTheme, HexColor } from "@/types/theme"

/**
 * Checks if a string looks like a valid hex color.
 *
 * @param value - Raw input color.
 * @returns True when the value is a valid 3 or 6 digit hex color.
 */
export function isHexColor(value: string): value is HexColor {
    return /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value)
}

/**
 * Returns a safe fallback hex color.
 *
 * @param value - Raw input color.
 * @param fallback - Fallback hex color.
 * @returns A valid hex color.
 */
export function normalizeHexColor(
    value: string,
    fallback: HexColor = "#DD7A2E",
): HexColor {
    return isHexColor(value) ? value : fallback
}

/**
 * Local mock theme data used until Sanity is connected.
 *
 * @returns A demo brand theme object.
 */
export function getMockBrandTheme(): BrandTheme {
    return {
        id: "autumn-orange",
        name: "Autumn Orange",
        primaryColor: "#DD7A2E",
        productName: "Nimbus Bottle",
        baseImageUrl: "/images/product-bottle.png",
        cloudinaryPublicId: "sanity-theme-demo/nimbus-bottle",
    }
}