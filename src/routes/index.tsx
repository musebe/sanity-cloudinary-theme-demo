import { createFileRoute } from "@tanstack/react-router"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Hero } from "@/components/marketing/hero"
import { ProductPreview } from "@/components/product/product-preview"
import { getActiveBrandThemeFn } from "@/server/functions/theme.functions"

/**
 * Home route for the demo app.
 */
export const Route = createFileRoute("/")({
  loader: async () => {
    const theme = await getActiveBrandThemeFn()
    return { theme }
  },
  component: HomePage,
})

/**
 * Renders the landing page for the demo.
 *
 * @returns The home page UI.
 */
function HomePage() {
  const { theme } = Route.useLoaderData()

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
          <Hero themeName={theme.name} />
          <ProductPreview theme={theme} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <Alert className="rounded-2xl">
          <AlertTitle>Live partner integration demo</AlertTitle>
          <AlertDescription>
            The app now reads the active launch theme from Sanity and uses that
            data to build a Cloudinary recolor preview at runtime.
          </AlertDescription>
        </Alert>
      </section>
    </main>
  )
}
