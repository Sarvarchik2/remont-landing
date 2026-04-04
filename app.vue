<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { language } = useLanguage()
const route = useRoute()

useHead({
  htmlAttrs: {
    lang: language.value
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://vicasa.uz' + route.path
    }
  ]
})
</script>
