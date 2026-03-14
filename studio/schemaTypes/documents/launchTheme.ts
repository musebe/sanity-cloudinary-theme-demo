import { defineField, defineType } from "sanity"

export const launchThemeType = defineType({
  name: "launchTheme",
  title: "Launch Theme",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Theme title",
      type: "string",
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active theme",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "brandPrimaryColor",
      title: "Brand primary color",
      type: "string",
      description: "Use a hex color like #DD7A2E",
      validation: (rule) =>
        rule.required().regex(/^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/),
    }),
    defineField({
      name: "productName",
      title: "Product name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productImage",
      title: "Product image",
      type: "cloudinary.asset",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "brandPrimaryColor",
    },
  },
})