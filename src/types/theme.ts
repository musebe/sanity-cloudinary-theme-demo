/**
 * A color value stored as a hex string.
 *
 * @example
 * "#DD7A2E"
 */
export type HexColor = `#${string}`

/**
 * Cloudinary asset data stored in Sanity.
 */
export interface CloudinaryAssetValue {
    /**
     * Cloudinary public id.
     */
    public_id: string

    /**
     * Secure delivery URL.
     */
    secure_url: string

    /**
     * Asset width.
     */
    width?: number

    /**
     * Asset height.
     */
    height?: number

    /**
     * Asset format.
     */
    format?: string

    /**
     * Cloudinary version number.
     */
    version?: number
}

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

    /**
     * Original Cloudinary image URL.
     */
    cloudinarySecureUrl?: string
}