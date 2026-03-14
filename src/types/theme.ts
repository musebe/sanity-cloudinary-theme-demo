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
     * Source product image before recolor.
     *
     * @remarks
     * In this section this is only a mock path.
     */
    baseImageUrl: string
}