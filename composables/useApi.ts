export const useApi = () => {
  const config = useRuntimeConfig()
  // Optional external CMS. When unset, fetches resolve to null and pages
  // fall back to their built-in content instead of hitting a dead domain.
  const baseURL = config.public.apiBase as string

  const get = async <T = any>(path: string): Promise<T | null> => {
    if (!baseURL) return null
    try {
      return await $fetch<T>(`${baseURL}${path}`)
    } catch (e) {
      console.error(`[useApi] GET ${path} failed:`, e)
      return null
    }
  }

  const fetchServices = () => get('/services/')
  const fetchPortfolio = () => get('/portfolio/')
  const fetchSettings = () => get('/settings/')
  const fetchCatalog = () => get('/catalog/')

  // Leads always go through our own server route (Telegram delivery),
  // regardless of whether an external CMS is configured.
  const createLead = async (data: any) => {
    return await $fetch('/api/lead', {
      method: 'POST',
      body: data,
    })
  }

  return {
    fetchServices,
    fetchPortfolio,
    fetchSettings,
    fetchCatalog,
    createLead,
    baseURL,
  }
}
