# Sanity Cloudinary Theme Demo

A demo app that shows how Sanity content can drive live product theming, while Cloudinary handles image delivery and recolor previews.

## What this demo does

* Stores launch theme content in Sanity
* Selects a product image from Cloudinary
* Reads the active theme in a TanStack Start app
* Recolors the product preview with Cloudinary transforms
* Lets you compare the original image with themed color variations

## Stack

* Sanity Studio
* Cloudinary
* TanStack Start
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

## Features

* Live theme data from Sanity
* Cloudinary media picker inside Studio
* Active launch theme content model
* Horizontal color swatch picker
* Stable image framing between original and recolored states
* Responsive homepage layout focused on the demo

## Project structure

```txt
.
├── studio/
│   └── Sanity Studio files
├── src/
│   ├── components/
│   │   ├── marketing/
│   │   └── product/
│   ├── lib/
│   │   ├── cloudinary/
│   │   ├── sanity/
│   │   └── theme/
│   ├── routes/
│   ├── server/
│   └── types/
└── ...
```

## How it works

### 1. Theme content lives in Sanity

A `launchTheme` document stores:

* theme title
* slug
* active theme flag
* brand primary color
* product name
* Cloudinary product image

The app fetches the active theme at runtime.

### 2. Cloudinary stores the source image

The product image is selected from Cloudinary inside Sanity Studio.

The app uses:

* a clean Cloudinary delivery URL for the original image
* a Cloudinary recolor transform for preview swatches

This keeps the original and recolored image in the same visual frame.

### 3. TanStack Start renders the live preview

The homepage loads the active theme, then:

* shows the theme name and color
* renders the original product image first
* lets you click color swatches to preview recolored versions

## Setup

## 1. Install dependencies

```bash
npm install
```

## 2. Environment variables

Create a `.env` file in the app root.

Add values like these:

```bash
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-03-01
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_ENABLE_CLOUDINARY_PREVIEW=true
```

If your app also uses server-side env helpers, make sure those values are available there too.

## 3. Run the app

```bash
npm run dev
```

## 4. Run Sanity Studio

If Studio lives in a separate folder, run:

```bash
cd studio
npm install
npm run dev
```

If Studio is already part of this app setup, use the existing Studio command in your project.

## Sanity content setup

Create a `Launch Theme` document in Studio.

Recommended fields:

* Theme title: `Autumn Orange`
* Slug: `autumn-orange`
* Active theme: enabled
* Brand primary color: `#DD7A2E`
* Product name: `Nimbus Bottle`
* Product image: choose a Cloudinary asset

Publish the document after saving it.

## Cloudinary notes

The demo expects a Cloudinary public ID for the selected asset.

Example:

```txt
product-bottle_zdwgem
```

The original image and recolored image both use Cloudinary delivery URLs so the preview stays visually stable.

## Useful commands

```bash
npm run dev
npm run lint
npm run build
```

For Studio:

```bash
npx sanity docs browse
npx sanity manage
npx sanity help
```

## Demo flow

1. Open Sanity Studio
2. Edit the active launch theme
3. Change the brand color or Cloudinary image
4. Save and publish
5. Refresh the app
6. Click swatches to preview recolored versions

## Future improvements

* Multiple published themes with a theme switcher
* Better loading and error states
* Deploy app and Studio
* Add screenshots or GIFs to the README
* Add tests for theme mapping and URL builders

## Troubleshooting

### Theme does not update

Check that:

* the document is published
* the active theme flag is enabled
* the query returns the active theme
* the Sanity project ID and dataset match your Studio

### Cloudinary recolor does not work

Check that:

* the Cloudinary cloud name is correct
* preview is enabled with `VITE_ENABLE_CLOUDINARY_PREVIEW=true`
* the selected image has a valid Cloudinary public ID

### Original and recolored image look different

Make sure both states use Cloudinary delivery URLs with the same width, height, and padding settings.

## License

This project is for demo and learning use unless you add your own license.
