export const insertIf = (condition: boolean, ...elements: unknown[]) =>
  condition ? elements : []

// function to check if links is internal or external
// export const isExternalLink = (url: string): boolean =>
//   url.startsWith('http') || url.startsWith('www')

// function to check if the url is internal
export const isInternalLink = (url: string): boolean =>
  url.startsWith('/') || url.startsWith('#')

export const containsArray = (
  userRoles: string[],
  allowedRoles: string[][]
): boolean | string => {
  return !!allowedRoles.find(
    (roles) =>
      roles.concat().sort().join(',') === userRoles.concat().sort().join(',')
  )
}
