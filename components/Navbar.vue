<template>
  <nav :class="cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-zinc-100' : 'bg-transparent py-6'
  )">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <div
          class="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center text-black font-serif italic text-xl group-hover:scale-110 transition-transform shadow-lg shadow-[#FFB800]/20">
          R
        </div>
        <span class="text-xl font-bold text-black tracking-tight">RemontUz</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-1 bg-zinc-100/50 p-1.5 rounded-full backdrop-blur-sm">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path" :class="cn(
          'px-6 py-2.5 rounded-full text-sm font-bold transition-all',
          route.path === link.path
            ? 'bg-white text-black shadow-md shadow-zinc-100'
            : 'text-zinc-500 hover:text-[#FFB800]'
        )">
          {{ link.name }}
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center gap-4">
        <LanguageSwitch />
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-black"
        @click="isOpen = !isOpen">
        <X v-if="isOpen" :size="20" />
        <MenuIcon v-else :size="20" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isOpen"
        class="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 p-6 md:hidden shadow-xl rounded-b-[32px]">
        <div class="flex flex-col gap-2">
          <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
            class="text-lg font-bold text-black py-4 border-b border-zinc-50 last:border-0" @click="isOpen = false">
            {{ link.name }}
          </NuxtLink>
          <div class="mt-4 flex flex-col gap-3">
            <div class="flex justify-center">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu as MenuIcon, X } from 'lucide-vue-next'
import { cn } from '~/utils/cn'
import { useLanguage } from '~/composables/useLanguage'
import LanguageSwitch from './LanguageSwitch.vue'
import Button from './Button.vue'

const { t } = useLanguage()
const route = useRoute()
const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  // Safe window access in onMounted
  if (typeof window !== 'undefined') {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})

const links = computed(() => [
  { name: t.value.nav.home, path: '/' },
  { name: t.value.nav.services, path: '/services' },
  { name: t.value.nav.portfolio, path: '/portfolio' },
  { name: t.value.nav.calculator, path: '/calculator' },
])
</script>
