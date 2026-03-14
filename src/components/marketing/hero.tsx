import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
    <div className="flex flex-col justify-center space-y-6">
      <Badge variant="secondary" className="w-fit">
        Sanity + TanStack Start + Cloudinary
      </Badge>

      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Dynamic product color theming
        </h1>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Change your launch theme in Sanity, then let your app recolor product
          imagery to match the selected brand color.
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-4">
        <p className="text-sm text-muted-foreground">Current demo theme</p>
        <p className="mt-1 text-lg font-medium">{themeName}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button size="lg">Preview demo</Button>
        <Button size="lg" variant="outline">
          View setup
        </Button>
      </div>
    </div>
  )
}