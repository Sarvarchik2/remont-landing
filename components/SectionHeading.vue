<template>
  <div :class="cn('mb-16', center && 'text-center')">
    <span v-if="subtitle" :class="cn('font-bold uppercase tracking-widest text-xs mb-3 block', dark ? 'text-zinc-400' : 'text-zinc-500')">
      {{ subtitle }}
    </span>
    <h2 :class="cn('text-3xl md:text-5xl font-extrabold leading-tight', dark ? 'text-white' : 'text-black')">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

defineProps<{
  title: string
  subtitle?: string
  center?: boolean
  dark?: boolean
}>()
</script>
