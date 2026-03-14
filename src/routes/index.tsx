import { createFileRoute } from "@tanstack/react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Home route for the demo app.
 *
 * @remarks
 * This is the first visual shell for the product recolor demo.
 * Later sections will connect Sanity and Cloudinary data.
 */
export const Route = createFileRoute("/")({
  component: HomePage,
})

/**
 * Renders the landing page for the demo.
 *
 * @returns The home page UI.
 */
function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <Badge variant="secondary" className="w-fit">
              Sanity + TanStack Start + Cloudinary
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Dynamic product color theming
              </h1>

              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Change a product launch theme in Sanity, then let the app render
                a recolored product image with Cloudinary AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg">Preview demo</Button>
              <Button size="lg" variant="outline">
                View setup
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden rounded-3xl border-border/60">
            <CardContent className="p-0">
              <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                <div className="bg-muted/40 p-6 sm:p-8">
                  <div className="flex h-full min-h-80 items-center justify-center rounded-2xl border border-dashed border-border bg-background">
                    <div className="space-y-3 text-center">
                      <div
                        className="mx-auto h-40 w-40 rounded-3xl border shadow-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, #f5a25d 0%, #d97706 100%)",
                        }}
                      />
                      <p className="text-sm text-muted-foreground">
                        Product image placeholder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between bg-background p-6 sm:p-8">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Active theme
                      </p>
                      <h2 className="text-2xl font-semibold">Autumn Orange</h2>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Brand primary color
                      </p>
                      <div className="flex items-center gap-3">
                        <span
                          className="h-8 w-8 rounded-full border"
                          style={{ backgroundColor: "#DD7A2E" }}
                        />
                        <code className="rounded-md bg-muted px-2 py-1 text-sm">
                          #DD7A2E
                        </code>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-muted p-4">
                      <p className="text-sm text-muted-foreground">
                        Next section
                      </p>
                      <p className="mt-1 text-sm">
                        We will connect this view to real server data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}