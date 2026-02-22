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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NuxtLink v-for="item in filtered" :key="item.id" :to="`/portfolio/${item.id}`" class="group block">
          <div class="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6">
            <img 
              :src="item.img" 
              :alt="item.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div class="absolute top-6 right-6 w-12 h-12 bg-[#FFB800] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-[#FFB800]/20">
              <ArrowRight class="text-black" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-black group-hover:text-[#FFB800] transition-colors">{{ item.title }}</h3>
          <p class="text-zinc-400 font-medium">Полный ремонт под ключ</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const { t } = useLanguage()

const filter = ref('all')

const filterOptions = computed(() => [
  { id: 'all', label: t.value.portfolioPage.all },
  { id: 'new', label: t.value.portfolioPage.apartments },
  { id: 'loft', label: t.value.portfolioPage.houses },
  { id: 'classic', label: t.value.portfolioPage.commercial }
])

const items = [
  { id: 1, title: 'ЖК Tashkent City', cat: 'new', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Loft Studio', cat: 'loft', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Minimalist House', cat: 'new', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Classic Apt', cat: 'classic', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
]

const filtered = computed(() => {
  if (filter.value === 'all') return items
  return items.filter(i => i.cat === filter.value)
})
</script>
