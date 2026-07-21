// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Server-only (never exposed to the client)
    telegramBotToken: '', // NUXT_TELEGRAM_BOT_TOKEN
    telegramChatId: '', // NUXT_TELEGRAM_CHAT_ID
    public: {
      // Optional external CMS/API. Empty = use built-in fallback content.
      apiBase: '', // NUXT_PUBLIC_API_BASE (e.g. https://api.example.uz/api/v1)
      siteUrl: 'https://vicasa.uz', // NUXT_PUBLIC_SITE_URL
    },
  },
  app: {
    head: {
      title: 'Vicasa - Ремонт как искусство | Премиальный ремонт и дизайн в Ташкенте',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { name: 'description', content: 'Vicasa - премиальный ремонт квартир и домов в Ташкенте под ключ. Создаем интерьеры для комфортной жизни без стресса и скрытых доплат.' },
        { name: 'keywords', content: 'ремонт квартир ташкент, дизайн интерьера ташкент, отделочные работы, ремонт домов узбекистан, евроремонт ташкент, премиальный ремонт, vicasa group, vicasa ремонт' },
        { property: 'og:title', content: 'Vicasa - Ремонт как искусство' },
        { property: 'og:description', content: 'Премиальный ремонт квартир и домов в Ташкенте под ключ. Гарантия качества и соблюдение сроков.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://vicasa.uz' },
        { property: 'og:site_name', content: 'Vicasa' },
        { property: 'og:image', content: 'https://vicasa.uz/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Vicasa - Ремонт как искусство' },
        { name: 'twitter:description', content: 'Премиальный ремонт квартир и домов в Ташкенте под ключ.' },
        { name: 'twitter:image', content: 'https://vicasa.uz/logo.png' },
        { name: 'google-site-verification', content: 'IXinhXEblbboW9bBkUfX11T5_IJmbkq65LakiNf2Vj0' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
