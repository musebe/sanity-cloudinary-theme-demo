import type { HexColor } from "@/types/theme"

export interface ThemeSwatch {
  /**
   * Swatch label shown in the UI.
   */
  label: string

  /**
   * Swatch color value.
   */
  color: HexColor
}

export interface ColorSwatchPickerProps {
  /**
   * Available swatches.
   */
  swatches: Array<ThemeSwatch>

  /**
   * Currently selected color.
   */
  selectedColor: HexColor | null

  /**
   * Called when the user selects a color.
   */
  onSelectColor: (color: HexColor | null) => void
}

/**
 * Renders the preview color swatches.
 *
 * @param props - Component props.
 * @returns The swatch picker UI.
 */
export function ColorSwatchPicker({
  swatches,
  selectedColor,
  onSelectColor,
}: ColorSwatchPickerProps) {
  return (
    <div className="space-y-3 rounded-2xl border bg-card p-4">
      <div>
        <p className="text-sm font-medium">Color variations</p>
        <p className="text-xs text-muted-foreground">
          Start with the original image, then try a new theme
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            onSelectColor(null)
          }}
          className={`rounded-full border px-3 py-2 text-sm transition ${
            selectedColor === null
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-background text-foreground"
          }`}
        >
          Original
        </button>

        {swatches.map((swatch) => {
          const isActive = selectedColor === swatch.color

          return (
            <button
              key={swatch.color}
              type="button"
              onClick={() => {
                onSelectColor(swatch.color)
              }}
              className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
                isActive
                  ? "border-foreground bg-muted"
                  : "border-border bg-background hover:bg-muted"
              }`}
              aria-label={`Apply ${swatch.label} color`}
            >
              <span
                className={`h-5 w-5 rounded-full border ${
                  isActive ? "ring-2 ring-foreground ring-offset-2" : ""
                }`}
                style={{ backgroundColor: swatch.color }}
              />
              <span>{swatch.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
