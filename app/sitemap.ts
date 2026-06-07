const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'tkim-061203.github.io'
const ownerName = process.env.GITHUB_REPOSITORY_OWNER ?? 'tkim-061203'
const isUserOrOrgSite = repoName.endsWith('.github.io')
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isUserOrOrgSite ? '' : `/${repoName}`)

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${ownerName.toLowerCase()}.github.io${basePath}`

export default async function sitemap() {
  let routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
