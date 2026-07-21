import { defineEventHandler, setHeader } from 'h3'

// Static routes of the marketing site. Portfolio detail pages are excluded
// because their ids come from an (optional) external CMS at runtime.
const ROUTES = ['/', '/services', '/calculator', '/portfolio', '/privacy', '/terms']

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const base = (config.public.siteUrl as string || 'https://vicasa.uz').replace(/\/$/, '')

  const urls = ROUTES.map((path) => {
    const priority = path === '/' ? '1.0' : '0.7'
    return `  <url>\n    <loc>${base}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})
