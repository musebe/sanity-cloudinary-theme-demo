import type { HexColor } from "@/types/theme"
import { getPublicEnv } from "@/lib/env/client"

export interface BuildRecolorImageUrlOptions {
    /**
     * Cloudinary public id for the source image.
     */
    publicId: string

    /**
     * Hex color used for recolor output.
     */
    color: HexColor

    /**
     * Natural language prompt for the target area.
     */
    prompt?: string

    /**
     * Output width.
     */
    width?: number

    /**
     * Output height.
     */
    height?: number
}

/**
 * Returns true when Cloudinary preview is enabled in the client.
 *
 * @returns True when recolor preview should be used.
 */
export function isCloudinaryPreviewEnabled(): boolean {
    return getPublicEnv("VITE_ENABLE_CLOUDINARY_PREVIEW") === "true"
}

/**
 * Builds a Cloudinary delivery URL that applies generative recolor.
 *
 * @remarks
 * This is a demo helper. We will later move final URL generation to the server.
 *
 * @param options - URL builder options.
 * @returns A Cloudinary image URL.
 */
export function buildRecolorImageUrl(
    options: BuildRecolorImageUrlOptions,
): string {
    const cloudName = getPublicEnv("VITE_CLOUDINARY_CLOUD_NAME")

    if (!cloudName || !isCloudinaryPreviewEnabled()) {
        return ""
    }

    const {
        publicId,
        color,
        prompt = "bottle",
        width = 900,
        height = 900,
    } = options

    const encodedPrompt = encodeURIComponent(prompt)
    const encodedColor = encodeURIComponent(color)

    return [
        `https://res.cloudinary.com/${cloudName}/image/upload`,
        `f_auto,q_auto,c_fill,w_${width},h_${height}`,
        `e_gen_recolor:prompt_${encodedPrompt};to-color_${encodedColor}`,
        publicId,
    ].join("/")
}