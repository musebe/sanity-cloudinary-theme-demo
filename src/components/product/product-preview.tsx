import { useMemo, useState } from "react"

import type { BrandTheme } from "@/types/theme"
import { buildRecolorImageUrl } from "@/lib/cloudinary/url"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

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
  const [showRecolor, setShowRecolor] = useState(true)

  const recolorUrl = useMemo(() => {
    if (!theme.cloudinaryPublicId) {
      return ""
    }

    return buildRecolorImageUrl({
      publicId: theme.cloudinaryPublicId,
      color: theme.primaryColor,
      prompt: "bottle",
      width: 900,
      height: 900,
    })
  }, [theme.cloudinaryPublicId, theme.primaryColor])

  const originalImageUrl = theme.cloudinarySecureUrl || theme.baseImageUrl
  const previewImageUrl =
    showRecolor && recolorUrl ? recolorUrl : originalImageUrl

  return (
    <Card className="overflow-hidden rounded-3xl border-border/60 shadow-sm">
      <CardContent className="p-0">
        <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-muted/40 p-6 sm:p-8">
            <div className="flex h-full min-h-80 items-center justify-center rounded-2xl border border-dashed border-border bg-background p-4">
              <div className="w-full max-w-sm space-y-4">
                <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                  <img
                    src={previewImageUrl}
                    alt={`${theme.productName} preview`}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between rounded-2xl border bg-card px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">Recolor preview</p>
                    <p className="text-xs text-muted-foreground">
                      Toggle between original and themed image
                    </p>
                  </div>

                  <Switch
                    checked={showRecolor}
                    onCheckedChange={setShowRecolor}
                    aria-label="Toggle recolor preview"
                  />
                </div>

                <p className="text-center text-sm text-muted-foreground">
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

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Cloudinary asset
                </p>
                <code className="block rounded-xl bg-muted px-3 py-2 text-xs break-all">
                  {theme.cloudinaryPublicId || "No Cloudinary asset selected"}
                </code>
              </div>

              <div className="rounded-2xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">Live data</p>
                <p className="mt-1 text-sm">
                  This preview uses Sanity content and Cloudinary transforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
