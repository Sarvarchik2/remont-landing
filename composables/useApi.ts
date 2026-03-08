export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = 'https://api.ulaskins.uz/api/v1'

  const fetchServices = async () => {
    return await $fetch(`${baseURL}/services/`)
  }

  const fetchPortfolio = async () => {
    return await $fetch(`${baseURL}/portfolio/`)
  }

  const fetchSettings = async () => {
    return await $fetch(`${baseURL}/settings/`)
  }

  const fetchCatalog = async () => {
    return await $fetch(`${baseURL}/catalog/`)
  }

  const createLead = async (data: any) => {
    return await $fetch(`${baseURL}/leads/`, {
      method: 'POST',
      body: data
    })
  }

  return {
    fetchServices,
    fetchPortfolio,
    fetchSettings,
    fetchCatalog,
    createLead,
    baseURL
  }
}
