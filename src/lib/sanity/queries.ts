import groq from 'groq'

/**
 * GROQ query for the active launch theme.
 */
export const activeLaunchThemeQuery = groq`
  *[_type == "launchTheme" && isActive == true] | order(_updatedAt desc)[0]{
    _id,
    title,
    slug,
    brandPrimaryColor,
    productName,
    productImage
  }
`