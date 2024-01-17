export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION || '2024-01-10'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET || "production",
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID || "qbrjehay",
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
