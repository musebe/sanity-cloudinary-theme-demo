export interface PreviewImagePanelProps {
  /**
   * Product name shown under the image.
   */
  productName: string

  /**
   * Image URL shown in the preview.
   */
  imageSrc: string

  /**
   * Image alt text.
   */
  imageAlt: string

  /**
   * Whether the preview is recolored.
   */
  isRecolored: boolean

  /**
   * Swatch picker UI.
   */
  controls: React.ReactNode
}

/**
 * Renders the image area of the product preview.
 *
 * @param props - Component props.
 * @returns The image panel UI.
 */
export function PreviewImagePanel({
  imageAlt,
  imageSrc,
  isRecolored,
  controls,
  productName,
}: PreviewImagePanelProps) {
  return (
    <div className="bg-muted/30 p-5 sm:p-6">
      <div className="flex h-full min-h-112 flex-col justify-between rounded-2xl border border-dashed border-border bg-background p-4 sm:p-5">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
            <div className="aspect-square w-full bg-white">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {controls}
        </div>

        <div className="pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            {isRecolored ? "Recolored preview" : "Original product image"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {productName} preview
          </p>
        </div>
      </div>
    </div>
  )
}
