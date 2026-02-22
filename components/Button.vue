<template>
  <button :class="cn(baseStyles, variants[variant], $attrs.class as string)" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
}>(), {
  variant: 'primary'
})

const baseStyles = "px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"

const variants = {
  primary: "bg-[#FFB800] text-black hover:bg-[#e0a200] shadow-xl shadow-[#FFB800]/20",
  secondary: "bg-zinc-100 text-black hover:bg-zinc-200",
  outline: "border-2 border-zinc-200 text-black hover:border-[#FFB800] hover:text-[#FFB800] bg-transparent",
  white: "bg-white text-black hover:bg-zinc-50 shadow-lg"
}
</script>
