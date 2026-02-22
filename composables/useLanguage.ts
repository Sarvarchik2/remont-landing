import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { translations, type Language } from '~/utils/translations'

export function useLanguage() {
    // Use useLocalStorage so changes reflect automatically
    const language = useLocalStorage<Language>('language', 'ru')

    const setLanguage = (lang: Language) => {
        language.value = lang
    }

    const t = computed(() => translations[language.value] || translations.ru)

    return {
        language,
        setLanguage,
        t
    }
}
