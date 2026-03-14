import { useMemo, useState } from "react"

import type { BrandTheme, HexColor } from "@/types/theme"
import type { ThemeSwatch } from "@/components/product/color-swatch-picker"
import { ColorSwatchPicker } from "@/components/product/color-swatch-picker"
import { PreviewImagePanel } from "@/components/product/preview-image-panel"
import { Card, CardContent } from "@/components/ui/card"
import {
  buildCloudinaryImageUrl,
  buildRecolorImageUrl,
} from "@/lib/cloudinary/url"

export interface ProductPreviewProps {
  /**
   * Brand theme data used to render the preview.
   */
  theme: BrandTheme
}

/**
 * Returns the set of demo swatches shown in the preview.
 *
 * @param baseColor - Active Sanity brand color.
 * @returns Demo swatch list.
 */
function getThemeSwatches(baseColor: HexColor): Array<ThemeSwatch> {
  return [
    { label: "Autumn", color: baseColor },
    { label: "Winter", color: "#3B82F6" },
    { label: "Forest", color: "#2F855A" },
    { label: "Berry", color: "#C53030" },
    { label: "Midnight", color: "#1F2937" },
  ]
}

/**
 * Renders the product preview panel.
 *
 * @param props - Component props.
 * @returns The product preview card.
 */
export function ProductPreview({ theme }: ProductPreviewProps) {
  const [selectedColor, setSelectedColor] = useState<HexColor | null>(null)

  const swatches = useMemo(
    () => getThemeSwatches(theme.primaryColor),
    [theme.primaryColor]
  )

  const originalImageUrl = useMemo(() => {
    if (!theme.cloudinaryPublicId) {
      return theme.cloudinarySecureUrl || theme.baseImageUrl
    }

    return (
      buildCloudinaryImageUrl({
        publicId: theme.cloudinaryPublicId,
        width: 1200,
        height: 1200,
      }) ||
      theme.cloudinarySecureUrl ||
      theme.baseImageUrl
    )
  }, [theme.baseImageUrl, theme.cloudinaryPublicId, theme.cloudinarySecureUrl])

  const recolorUrl = useMemo(() => {
    if (!theme.cloudinaryPublicId || !selectedColor) {
      return ""
    }

    return buildRecolorImageUrl({
      publicId: theme.cloudinaryPublicId,
      color: selectedColor,
      prompt: "bottle",
      width: 1200,
      height: 1200,
    })
  }, [selectedColor, theme.cloudinaryPublicId])

  const previewImageUrl = recolorUrl || originalImageUrl
  const displayColor = selectedColor || theme.primaryColor
  const isRecolored = Boolean(selectedColor && recolorUrl)

  return (
    <Card className="overflow-hidden rounded-3xl border-border/60 shadow-sm">
      <CardContent className="p-0">
        <div className="grid gap-0 lg:grid-cols-[1.45fr_0.75fr]">
          <PreviewImagePanel
            productName={theme.productName}
            imageSrc={previewImageUrl}
            imageAlt={`${theme.productName} preview`}
            isRecolored={isRecolored}
            controls={
              <ColorSwatchPicker
                swatches={swatches}
                selectedColor={selectedColor}
                onSelectColor={setSelectedColor}
              />
            }
          />

          <div className="flex flex-col justify-between bg-background p-5 sm:p-6">
            <div className="space-y-5">
              <div>
                <p className="text-sm text-muted-foreground">Active theme</p>
                <h2 className="text-2xl font-semibold">{theme.name}</h2>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Selected preview color
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="h-8 w-8 rounded-full border"
                    style={{ backgroundColor: displayColor }}
                  />
                  <code className="rounded-md bg-muted px-2 py-1 text-sm">
                    {displayColor}
                  </code>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Cloudinary asset
                </p>
                <code className="block rounded-xl bg-muted px-3 py-2 text-xs break-all">
                  {theme.cloudinaryPublicId || "No Cloudinary asset selected"}
                </code>
              </div>

              <div className="rounded-2xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">Live demo state</p>
                <p className="mt-1 text-sm">
                  Click a swatch to preview a new themed product color.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
