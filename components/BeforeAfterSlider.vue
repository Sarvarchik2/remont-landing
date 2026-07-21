<template>
  <div class="relative w-full h-[500px] rounded-[32px] overflow-hidden cursor-ew-resize select-none shadow-2xl"
    role="slider" tabindex="0"
    :aria-valuenow="Math.round(sliderPosition)" aria-valuemin="0" aria-valuemax="100"
    :aria-label="t.beforeAfter.title"
    @mousedown="setIsDragging(true)" @mouseup="setIsDragging(false)" @mouseleave="setIsDragging(false)"
    @mousemove="handleMouseMove" @touchmove="handleTouchMove" @keydown="handleKey">
    <div class="absolute inset-0">
      <img src="/img/after.jpg" loading="lazy" width="1800" height="1005"
        alt="After" class="w-full h-full object-cover" />
      <span
        class="absolute top-6 right-6 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-sm">{{
          t.beforeAfter.after }}</span>
    </div>

    <div class="absolute inset-0 overflow-hidden border-r-2 border-white" :style="{ width: sliderPosition + '%' }">
      <img
        src="/img/before.jpg" loading="lazy" width="1800" height="1005"
        alt="Before" class="w-full h-full object-cover max-w-none" style="width: 100vw;" />
      <span
        class="absolute top-6 left-6 bg-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-sm">{{
          t.beforeAfter.before }}</span>
    </div>

    <div class="absolute top-0 bottom-0 w-12 -ml-6 flex items-center justify-center z-10"
      :style="{ left: sliderPosition + '%' }">
      <div class="w-10 h-10 bg-[#FFB800] rounded-full shadow-xl flex items-center justify-center text-black">
        <div class="flex gap-1">
          <ChevronLeft :size="14" />
          <ChevronLeft :size="14" class="rotate-180" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const sliderPosition = ref(50)
const isDragging = ref(false)

const setIsDragging = (val: boolean) => {
  isDragging.value = val
}

const handleMove = (clientX: number, rect: DOMRect) => {
  const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
  const percentage = (x / rect.width) * 100
  sliderPosition.value = percentage
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  handleMove(e.clientX, rect)
}

const handleTouchMove = (e: TouchEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  handleMove(e.touches[0].clientX, rect)
}

const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    sliderPosition.value = Math.max(0, sliderPosition.value - 5)
  } else if (e.key === 'ArrowRight') {
    sliderPosition.value = Math.min(100, sliderPosition.value + 5)
  } else {
    return
  }
  e.preventDefault()
}
</script>
