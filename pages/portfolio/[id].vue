<template>
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6">
      <NuxtLink to="/portfolio" class="inline-flex items-center gap-2 font-bold text-zinc-400 hover:text-[#FFB800] mb-8 transition-colors">
        <ChevronLeft /> Назад
      </NuxtLink>
        <div v-if="loading" class="py-20 text-center">
        <div class="w-16 h-16 border-4 border-[#FFB800] border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
        <h3 class="text-2xl font-bold text-zinc-400">Загрузка проекта...</h3>
      </div>

      <div v-else-if="!project" class="py-20 text-center">
        <h3 class="text-2xl font-bold text-zinc-400">Проект не найден</h3>
        <NuxtLink to="/portfolio" class="text-[#FFB800] underline mt-4 inline-block">Вернуться в портфолио</NuxtLink>
      </div>
      
      <div v-else class="mb-20">
          <h1 class="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">{{ project.title }}</h1>
          <div class="flex flex-wrap gap-4 mb-8">
              <div v-if="project.type_label" class="bg-zinc-100 px-6 py-3 rounded-full font-bold">{{ project.type_label }}</div>
              <div v-else class="bg-zinc-100 px-6 py-3 rounded-full font-bold">Ремонт</div>
              <div v-if="project.style" class="bg-zinc-100 px-6 py-3 rounded-full font-bold">{{ project.style }}</div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div class="lg:col-span-2">
                  <div class="rounded-[40px] overflow-hidden aspect-video mb-12 shadow-2xl">
                      <img :src="project.image || project.img" class="w-full h-full object-cover" />
                  </div>
                  
                  <h2 class="text-3xl font-bold mb-6">О проекте</h2>
                  <p class="text-xl text-zinc-500 leading-relaxed mb-12">
                      {{ project.description || project.desc }}
                  </p>

                  <h2 v-if="project.scope && project.scope.length" class="text-3xl font-bold mb-8">Выполненные работы</h2>
                  <div v-if="project.scope && project.scope.length" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div v-for="(phase, idx) in project.scope" :key="idx" class="bg-zinc-50 p-8 rounded-[32px]">
                          <h3 class="font-bold text-lg mb-4 text-black border-b border-zinc-200 pb-2">{{ phase.cat || phase.name }}</h3>
                          <ul class="space-y-3">
                              <li v-for="(item, i) in phase.items" :key="i" class="flex items-start gap-3 text-zinc-600">
                                  <CheckCircle2 :size="18" class="shrink-0 mt-1 text-[#FFB800]" />
                                  <span>{{ item }}</span>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <h2 v-if="project.video_url" class="text-3xl font-bold mb-8">Видео-обзор</h2>
                  <div v-if="project.video_url" class="bg-black rounded-[32px] overflow-hidden aspect-video relative group cursor-pointer">
                      <img :src="project.image || project.img" class="w-full h-full object-cover opacity-60" />
                      <div class="absolute inset-0 flex items-center justify-center">
                          <div class="w-24 h-24 bg-[#FFB800] rounded-full flex items-center justify-center pl-2 shadow-2xl shadow-[#FFB800]/20 group-hover:scale-110 transition-transform">
                              <Play :size="40" fill="black" />
                          </div>
                      </div>
                  </div>
              </div>

              <div class="space-y-8">
                  <div class="bg-black text-white p-10 rounded-[40px] relative overflow-hidden">
                      <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFB800] opacity-10 blur-[80px] rounded-full"></div>
                      <div class="mb-8 relative z-10">
                          <div class="text-zinc-400 text-sm uppercase tracking-wider mb-2">Бюджет</div>
                          <div class="text-4xl font-extrabold text-[#FFB800]">{{ project.budget }}</div>
                      </div>
                      <div class="mb-10 relative z-10">
                          <div class="text-zinc-400 text-sm uppercase tracking-wider mb-2">Срок реализации</div>
                          <div class="text-4xl font-extrabold">{{ project.term }}</div>
                      </div>
                      <NuxtLink to="/calculator">
                        <Button variant="white" class="w-full h-16 bg-[#FFB800] text-black border-none hover:bg-[#e0a200] shadow-lg shadow-[#FFB800]/20">Рассчитать смету</Button>
                      </NuxtLink>
                  </div>

                  <div v-if="project.team && project.team.length" class="bg-black p-10 rounded-[40px] text-white">
                       <h3 class="font-bold text-xl mb-6">Команда</h3>
                       <div class="space-y-6">
                           <div v-for="(member, i) in project.team" :key="i" class="flex items-center gap-4">
                               <div class="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden">
                                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" class="w-full h-full object-cover" />
                               </div>
                               <div class="flex flex-col">
                                   <span class="font-bold">{{ typeof member === 'string' ? member : member.name }}</span>
                                   <span v-if="typeof member !== 'string' && member.role" class="text-sm text-zinc-400">{{ member.role }}</span>
                               </div>
                           </div>
                       </div>
                  </div>

                  <div v-if="project.materials && project.materials.length" class="bg-black p-10 rounded-[40px] text-white">
                       <h3 class="font-bold text-xl mb-6 flex items-center gap-2">
                           <Package :size="20" class="text-[#FFB800]" /> Материалы
                       </h3>
                       <div class="flex flex-wrap gap-3">
                           <span v-for="(mat, i) in project.materials" :key="i" class="bg-zinc-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm text-zinc-300">
                               {{ mat }}
                           </span>
                       </div>
                  </div>
              </div>
          </div>
          
          <div v-if="project.gallery && project.gallery.length" class="mt-20">
              <h2 class="text-3xl font-bold mb-10">Галерея проекта</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div v-for="(img, i) in project.gallery" :key="i" :class="[i === 2 ? 'md:col-span-2 h-[600px]' : 'h-[500px]', 'rounded-[40px] overflow-hidden']">
                       <img :src="img" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronLeft, CheckCircle2, Play, Package } from 'lucide-vue-next'

const route = useRoute()
const { t, language } = useLanguage()
const { baseURL } = useApi()

const loading = ref(true)
const project = ref<any>(null)

onMounted(async () => {
  try {
    const id = route.params.id
    const response = await $fetch('https://api.ulaskins.uz/api/v1/portfolio/')
    const allData = Array.isArray(response) ? response : (response as any || [])
    const data = allData.find((item: any) => String(item.id) === String(id) || String(item._id) === String(id))

    if (!data) throw new Error("Project not found")
    
    // Map localized fields if they exist
    const lang = language.value
    const getLocalized = (field: any, fallback: string = '') => {
      if (!field) return fallback
      if (typeof field === 'object') return field[lang] || field.ru || field.uz || fallback
      return field
    }

    project.value = {
      ...data,
      title: data[`name_${lang}`] || getLocalized(data.name) || getLocalized(data.title) || 'Детали проекта',
      description: data[`description_${lang}`] || getLocalized(data.description) || getLocalized(data.desc),
      // Add other localized fields if they exist in the detailed project view
    }
  } catch (e) {
    console.error('Failed to fetch project details:', e)
    // Fallback for demo
    if (route.params.id) {
      project.value = { 
        title: 'ЖК Tashkent City', 
        budget: '350 млн сум', 
        term: '3 месяца',
        img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
        desc: t.value.caseDetail.about || "Просторная квартира в современном стиле с элементами минимализма.",
        scope: [
            { cat: 'Демонтаж', items: ['Снос перегородок', 'Вывоз строительного мусора', 'Зачистка поверхностей'] },
            { cat: 'Черновые работы', items: ['Возведение стен (пеноблок)', 'Штукатурка под маяк', 'Стяжка пола с шумоизоляцией', 'Разводка электрики и сантехники'] },
            { cat: 'Чистовые работы', items: ['Укладка инженерной доски', 'Покраска стен (Little Greene)', 'Монтаж теневого профиля', 'Установка сантехники Grohe'] },
        ],
        materials: ['Knauf', 'Tikkurila', 'Grohe', 'Schneider Electric', 'Kerama Marazzi'],
        team: ['Искандер Р. (Прораб)', 'Мадина А. (Дизайнер)']
      }
    }
  } finally {
    loading.value = false
  }
})
</script>
