import type { HexColor } from '@/types/theme'
import { getPublicEnv } from '@/lib/env/client'

export interface BuildCloudinaryImageUrlOptions {
    /**
     * Cloudinary public id for the source image.
     */
    publicId: string

    /**
     * Output width.
     */
    width?: number

    /**
     * Output height.
     */
    height?: number
}

export interface BuildRecolorImageUrlOptions
    extends BuildCloudinaryImageUrlOptions {
    /**
     * Hex color used for recolor output.
     */
    color: HexColor

    /**
     * Natural language prompt for the target area.
     */
    prompt?: string
}

/**
 * Returns true when Cloudinary preview is enabled in the client.
 *
 * @returns True when recolor preview should be used.
 */
export function isCloudinaryPreviewEnabled(): boolean {
    return getPublicEnv('VITE_ENABLE_CLOUDINARY_PREVIEW') === 'true'
}

/**
 * Builds a clean Cloudinary delivery URL for the original product image.
 *
 * @param options - URL builder options.
 * @returns A Cloudinary image URL.
 */
export function buildCloudinaryImageUrl(
    options: BuildCloudinaryImageUrlOptions,
): string {
    const cloudName = getPublicEnv('VITE_CLOUDINARY_CLOUD_NAME')

    if (!cloudName) {
        return ''
    }

    const { publicId, width = 1200, height = 1200 } = options

    return [
        `https://res.cloudinary.com/${cloudName}/image/upload`,
        `f_auto,q_auto,c_pad,w_${width},h_${height},b_white`,
        publicId,
    ].join('/')
}

/**
 * Builds a Cloudinary delivery URL that applies generative recolor.
 *
 * @remarks
 * This uses the same base box as the original image to avoid layout shifts.
 *
 * @param options - URL builder options.
 * @returns A Cloudinary image URL.
 */
export function buildRecolorImageUrl(
    options: BuildRecolorImageUrlOptions,
): string {
    const cloudName = getPublicEnv('VITE_CLOUDINARY_CLOUD_NAME')

    if (!cloudName || !isCloudinaryPreviewEnabled()) {
        return ''
    }

    const {
        publicId,
        color,
        prompt = 'bottle',
        width = 1200,
        height = 1200,
    } = options

    const encodedPrompt = encodeURIComponent(prompt)
    const encodedColor = encodeURIComponent(color)

    return [
        `https://res.cloudinary.com/${cloudName}/image/upload`,
        `f_auto,q_auto,c_pad,w_${width},h_${height},b_white`,
        `e_gen_recolor:prompt_${encodedPrompt};to-color_${encodedColor}`,
        publicId,
    ].join('/')
}