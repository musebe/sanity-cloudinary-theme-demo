/**
 * Reads a required environment variable on the server.
 *
 * @param key - Environment variable name.
 * @returns The environment value.
 * @throws Error when the variable is missing.
 */
export function getRequiredServerEnv(key: string): string {
    const value = process.env[key]

    if (!value) {
        throw new Error(`Missing required server environment variable: ${key}`)
    }

    return value
}

/**
 * Reads an optional environment variable on the server.
 *
 * @param key - Environment variable name.
 * @returns The environment value, or an empty string when missing.
 */
export function getOptionalServerEnv(key: string): string {
    return process.env[key] ?? ""
}