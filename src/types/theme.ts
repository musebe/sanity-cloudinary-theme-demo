/**
 * A color value stored as a hex string.
 *
 * @example
 * "#DD7A2E"
 */
export type HexColor = `#${string}`

/**
 * Brand theme data used by the demo app.
 */
export interface BrandTheme {
    /**
     * Stable theme id.
     */
    id: string

    /**
     * Human friendly theme name.
     */
    name: string

    /**
     * Primary brand color chosen in Sanity.
     */
    primaryColor: HexColor

    /**
     * Demo product title shown in the UI.
     */
    productName: string

    /**
     * Local fallback image path.
     */
    baseImageUrl: string

    /**
     * Cloudinary public id for the product asset.
     */
    cloudinaryPublicId: string
}