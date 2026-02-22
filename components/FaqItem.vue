<template>
  <div class="border-b border-zinc-100 last:border-0">
    <button 
      class="w-full py-6 flex items-center justify-between text-left group"
      @click="isOpen = !isOpen"
    >
      <span class="text-lg font-bold group-hover:text-[#FFB800] transition-colors">{{ q }}</span>
      <div :class="cn('w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-transform', isOpen && 'rotate-45 bg-[#FFB800] border-[#FFB800] text-black')">
        <Plus :size="16" />
      </div>
    </button>
    <div 
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :style="{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }"
    >
      <div class="pb-6 text-zinc-500 leading-relaxed max-w-2xl">
        {{ a }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import { cn } from '~/utils/cn'

defineProps<{
  q: string
  a: string
}>()

const isOpen = ref(false)
</script>
