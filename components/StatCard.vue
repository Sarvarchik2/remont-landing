<template>
  <div class="bg-zinc-50 p-8 rounded-[32px] text-center hover:bg-zinc-100 transition-colors">
    <div class="text-4xl font-extrabold text-black mb-2">{{ number }}</div>
    <div class="text-zinc-500 font-medium text-sm uppercase tracking-wide">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  label: string
}>()
</script>
