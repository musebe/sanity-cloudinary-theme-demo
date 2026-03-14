import { getOptionalServerEnv, getRequiredServerEnv } from '@/lib/env/server'

/**
 * Returns the Sanity project config used for HTTP queries.
 *
 * @returns Sanity project settings.
 */
export function getSanityConfig() {
    return {
        projectId: getRequiredServerEnv('SANITY_PROJECT_ID'),
        dataset: getRequiredServerEnv('SANITY_DATASET'),
        apiVersion: getOptionalServerEnv('SANITY_API_VERSION') || '2025-03-01',
    }
}