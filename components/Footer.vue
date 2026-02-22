<template>
  <footer class="bg-[#FFB800] text-black pt-24 pb-12 rounded-t-[40px] mt-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2">
          <div class="text-3xl font-serif italic mb-6 text-black">RemontUz</div>
          <p class="text-black/70 text-lg leading-relaxed max-w-md">
            {{ t.footer.description }}
          </p>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-6 text-black">{{ t.footer.menu }}</h3>
          <ul class="space-y-4 text-black/70">
            <li><NuxtLink to="/portfolio" class="hover:text-white transition-colors">{{ t.footer.projects }}</NuxtLink></li>
            <li><NuxtLink to="/calculator" class="hover:text-white transition-colors">{{ t.footer.calculator }}</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">{{ t.footer.services }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-6 text-black">{{ t.footer.contact }}</h3>
          <ul class="space-y-4 text-black/70">
            <li class="flex items-center gap-3">
              +998 90 123-45-67
            </li>
            <li class="flex items-center gap-3">
              Ташкент, Центр
            </li>
            <li class="flex gap-4 mt-4">
              <a href="#" class="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Instagram :size="18" />
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <Send :size="18" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-black/60 text-sm">
        <div>{{ t.footer.rights }}</div>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-black transition-colors">{{ t.footer.privacy }}</a>
          <a href="#" class="hover:text-black transition-colors">{{ t.footer.terms }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Send } from 'lucide-vue-next'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
</script>
