import { createServerFn } from '@tanstack/react-start'

import { getActiveBrandTheme } from '@/server/services/theme.server'

/**
 * Server function that returns the active brand theme.
 *
 * @remarks
 * TanStack Start server functions are created with createServerFn().
 */
export const getActiveBrandThemeFn = createServerFn({ method: 'GET' }).handler(
    async () => {
        return getActiveBrandTheme()
    },
)