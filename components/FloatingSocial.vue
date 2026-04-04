<template>
  <div class="fixed bottom-8 right-8 flex flex-col gap-4 z-[9999] animate-bounce-subtle">
    <!-- Telegram -->
    <a 
      href="https://t.me/vicasa_bot" 
      target="_blank" 
      rel="noopener noreferrer"
      class="w-14 h-14 bg-[#26A5E4] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group relative"
      aria-label="Написать в Telegram"
    >
      <Send :size="28" />
      <span class="absolute right-full mr-4 bg-black/80 text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
        {{ language === 'ru' ? 'Написать в Telegram' : 'Telegram\'da yozish' }}
      </span>
    </a>

    <!-- Phone Call (Mobile Only) -->
    <a 
      href="tel:+998903547666" 
      class="md:hidden w-14 h-14 bg-[#FFB800] text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group relative"
      aria-label="Позвонить нам"
    >
      <Phone :size="28" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Send, Phone } from 'lucide-vue-next'
const { language } = useLanguage()
</script>

<style scoped>
.animate-bounce-subtle {
  animation: bounceSubtle 3s infinite;
}

@keyframes bounceSubtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
