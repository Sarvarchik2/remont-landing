<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      :class="cn(
        'flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300',
        'bg-zinc-100 hover:bg-[#FFB800]/20 text-black hover:text-[#FFB800]',
        'font-medium text-sm'
      )"
    >
      <Languages :size="16" />
      <span class="hidden md:inline">{{ currentLang?.flag }}</span>
      <span class="text-xs font-bold uppercase tracking-wider">{{ language }}</span>
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0 -translate-y-2"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 -translate-y-2"
    >
      <div v-if="isOpen">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 z-40"
          @click="isOpen = false"
        />
        
        <!-- Dropdown -->
        <div
          class="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden z-50 min-w-[160px]"
        >
          <button
            v-for="lang in availableLanguages"
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            :class="cn(
              'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
              'hover:bg-zinc-50',
              language === lang.code && 'bg-zinc-100 font-bold'
            )"
          >
            <span class="text-xl">{{ lang.flag }}</span>
            <span class="text-sm">{{ lang.label }}</span>
            <div
              v-if="language === lang.code"
              class="ml-auto w-2 h-2 rounded-full bg-black"
            />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Languages } from 'lucide-vue-next'
import { useLanguage } from '~/composables/useLanguage'
import { cn } from '~/utils/cn'
import type { Language } from '~/utils/translations'

const { language, setLanguage } = useLanguage()
const isOpen = ref(false)

const availableLanguages = [
  { code: 'ru' as Language, label: 'Русский', flag: '🇷🇺' },
  { code: 'uz' as Language, label: 'O\'zbek', flag: '🇺🇿' },
]

const currentLang = computed(() => availableLanguages.find(l => l.code === language.value))

const selectLanguage = (code: Language) => {
  setLanguage(code)
  isOpen.value = false
}
</script>
