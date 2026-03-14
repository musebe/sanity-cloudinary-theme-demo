import { createClient } from '@sanity/client'

import { getOptionalServerEnv, getRequiredServerEnv } from '@/lib/env/server'

/**
 * Creates the Sanity client used by the server.
 *
 * @returns A configured Sanity client instance.
 */
export function createSanityClient() {
    const projectId = getRequiredServerEnv('SANITY_PROJECT_ID')
    const dataset = getRequiredServerEnv('SANITY_DATASET')
    const apiVersion = getOptionalServerEnv('SANITY_API_VERSION') || '2025-03-01'

    return createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
    })
}