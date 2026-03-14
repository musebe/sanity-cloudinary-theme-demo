import { Badge } from "@/components/ui/badge"

export interface HeroProps {
  /**
   * Theme name shown in the heading area.
   */
  themeName: string
}

/**
 * Renders the left side hero content.
 *
 * @param props - Component props.
 * @returns The hero section content.
 */
export function Hero({ themeName }: HeroProps) {
  return (
    <div className="space-y-4">
      <Badge variant="secondary" className="w-fit">
        Sanity + TanStack Start + Cloudinary
      </Badge>

      <div className="space-y-3">
        <h1 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Dynamic product color theming
        </h1>

        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Change your launch theme in Sanity, then let your app recolor product
          imagery to match the selected brand color in real time.
        </p>
      </div>

      <div className="rounded-2xl border bg-card px-4 py-3">
        <p className="text-sm text-muted-foreground">Current live theme</p>
        <p className="mt-1 text-lg font-medium">{themeName}</p>
      </div>
    </div>
  )
}
