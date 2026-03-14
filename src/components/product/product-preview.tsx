import type { BrandTheme } from "@/types/theme"
import { buildRecolorImageUrl } from "@/lib/cloudinary/url"
import { Card, CardContent } from "@/components/ui/card"

export interface ProductPreviewProps {
  /**
   * Brand theme data used to render the preview.
   */
  theme: BrandTheme
}

/**
 * Renders the product preview panel.
 *
 * @param props - Component props.
 * @returns The product preview card.
 */
export function ProductPreview({ theme }: ProductPreviewProps) {
  const recolorUrl = buildRecolorImageUrl({
    publicId: theme.cloudinaryPublicId,
    color: theme.primaryColor,
    prompt: "bottle",
    width: 900,
    height: 900,
  })

  const imageSrc = recolorUrl || theme.baseImageUrl
  const imageAlt = recolorUrl
    ? `${theme.productName} recolor preview`
    : `${theme.productName} placeholder`

  return (
    <Card className="overflow-hidden rounded-3xl border-border/60">
      <CardContent className="p-0">
        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-muted/40 p-6 sm:p-8">
            <div className="flex h-full min-h-80 items-center justify-center rounded-2xl border border-dashed border-border bg-background">
              <div className="w-full max-w-xs space-y-3 text-center">
                <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  {theme.productName} preview
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-background p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <p className="text-sm text-muted-foreground">Active theme</p>
                <h2 className="text-2xl font-semibold">{theme.name}</h2>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Brand primary color
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="h-8 w-8 rounded-full border"
                    style={{ backgroundColor: theme.primaryColor }}
                  />
                  <code className="rounded-md bg-muted px-2 py-1 text-sm">
                    {theme.primaryColor}
                  </code>
                </div>
              </div>

              <div className="rounded-2xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">Section status</p>
                <p className="mt-1 text-sm">
                  Cloudinary preview is enabled only when the app flag is set.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}