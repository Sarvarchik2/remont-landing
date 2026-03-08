<template>
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6">
      <SectionHeading :title="t.portfolioPage.title" :subtitle="t.portfolioPage.subtitle" />

      <div class="flex gap-4 mb-12 overflow-x-auto pb-4">
        <button
          v-for="f in filterOptions"
          :key="f.id"
          @click="filter = f.id"
          :class="cn(
            'px-8 py-3 rounded-full font-bold whitespace-nowrap transition-all',
            filter === f.id 
              ? 'bg-[#FFB800] text-black shadow-md shadow-[#FFB800]/20' 
              : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
          )"
        >
          {{ f.label }}
        </button>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
        <div v-for="i in 4" :key="i" class="bg-zinc-100 h-96 rounded-[40px]"></div>
      </div>

      <div v-else-if="filtered.length === 0" class="py-20 text-center">
        <div class="text-6xl mb-6">🏜️</div>
        <h3 class="text-2xl font-bold text-zinc-400">Проектов пока нет</h3>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NuxtLink v-for="item in filtered" :key="item.id || item._id" :to="`/portfolio/${item.id || item._id}`" class="group block">
          <div class="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6">
            <img 
              :src="item.image || item.img || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'" 
              :alt="item.displayTitle" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div class="absolute top-6 right-6 w-12 h-12 bg-[#FFB800] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-[#FFB800]/20">
              <ArrowRight class="text-black" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-black group-hover:text-[#FFB800] transition-colors">{{ item.displayTitle }}</h3>
          <p class="text-zinc-400 font-medium">{{ item.displayDesc }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const { t, language } = useLanguage()

const { fetchPortfolio, baseURL } = useApi()

const filter = ref('all')
const items = ref<any[]>([])
const loading = ref(true)

const displayItems = computed(() => {
  const lang = language.value
  const getLocalized = (field: any, fallback: string = '') => {
    if (!field) return fallback
    if (typeof field === 'object') return field[lang] || field.ru || field.uz || fallback
    return field
  }

  return items.value.map(item => ({
    ...item,
    displayTitle: item[`name_${lang}`] || getLocalized(item.name) || getLocalized(item.title) || 'Проект',
    displayDesc: item[`description_${lang}`] || getLocalized(item.description) || getLocalized(item.desc) || getLocalized(item.category_name) || t.value.portfolioPage.all
  }))
})
const filterOptions = computed(() => [
  { id: 'all', label: t.value.portfolioPage.all },
  { id: 'new', label: t.value.portfolioPage.apartments },
  { id: 'loft', label: t.value.portfolioPage.houses },
  { id: 'classic', label: t.value.portfolioPage.commercial }
])

onMounted(async () => {
  try {
    const data = await fetchPortfolio()
    items.value = Array.isArray(data) ? data : []
  } catch (e) {
    console.error('Failed to fetch portfolio:', e)
  } finally {
    loading.value = false
  }
})

const filtered = computed(() => {
  if (filter.value === 'all') return displayItems.value
  return displayItems.value.filter(i => i.category === filter.value || i.cat === filter.value)
})
</script>
