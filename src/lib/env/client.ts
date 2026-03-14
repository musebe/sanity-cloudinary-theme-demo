/**
 * Reads a public environment variable from the client runtime.
 *
 * @param key - Public environment variable name.
 * @returns The environment value, or an empty string when missing.
 */
export function getPublicEnv(key: string): string {
    return import.meta.env[key] ?? ""
}