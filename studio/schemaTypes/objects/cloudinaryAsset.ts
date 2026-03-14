import { defineField, defineType } from "sanity"

export const cloudinaryAssetType = defineType({
  name: "cloudinaryAsset",
  title: "Cloudinary Asset",
  type: "object",
  fields: [
    defineField({
      name: "publicId",
      title: "Public ID",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secureUrl",
      title: "Secure URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "assetId",
      title: "Asset ID",
      type: "string",
    }),
    defineField({
      name: "originalFilename",
      title: "Original filename",
      type: "string",
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
    }),
    defineField({
      name: "resourceType",
      title: "Resource type",
      type: "string",
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "number",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
    }),
  ],
})