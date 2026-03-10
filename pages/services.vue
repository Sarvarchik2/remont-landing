<template>
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6">
      <SectionHeading :title="t.servicesPage.title" :subtitle="t.servicesPage.subtitle" center />

      <!-- Packages -->
      <div class="flex flex-col gap-8 mb-32">
        <ServicePackage 
          v-for="(pkg, i) in packages"
          :key="i"
          :index="Number(i)"
          :title="pkg.title"
          :price="pkg.price"
          :unit="pkg.unit"
          :description="pkg.desc"
          :features="pkg.features"
          :image="pkg.image"
          :isReversed="Number(i) % 2 !== 0"
          :isDark="pkg.isBlack"
          @select="navigateTo(`/calculator?tier=${pkg.id}`)"
        />

      </div>

      <!-- Categories Section -->
      <div v-if="individualWorks.length > 0" class="max-w-5xl mx-auto mb-32">
        <SectionHeading :title="t.servicesPage.individualWorks" :subtitle="t.servicesPage.individualDesc" />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div v-for="(category, idx) in individualWorks" :key="idx">
            <h3 class="text-2xl font-bold mb-8 border-b-2 border-black pb-4 inline-flex items-center gap-3">
              <component :is="getIcon(category.icon)" v-if="category.icon" :size="24" class="text-[#FFB800]" />
              {{ category.cat }}
            </h3>
            <div class="space-y-6">
              <div v-for="(item, i) in category.items" :key="i" class="flex justify-between items-end group">
                <div class="relative z-10 bg-white pr-4 text-lg font-medium text-zinc-800 group-hover:text-[#FFB800] transition-colors">
                  {{ item.name }}
                </div>
                <div class="flex-1 border-b-2 border-dotted border-zinc-200 mb-1.5 mx-2"></div>
                <div class="relative z-10 bg-white pl-4 text-lg font-bold text-black whitespace-nowrap">
                  {{ item.price }} 
                  <span v-if="item.unit" class="text-sm font-normal text-zinc-500 ml-1">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Design Process -->
      <div class="bg-zinc-50 rounded-[40px] p-12 md:p-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Дизайн-проект" subtitle="Визуализация" />
            <p class="text-xl text-zinc-500 leading-relaxed mb-10">
              Мы не просто делаем ремонт, мы создаем эргономичное пространство для жизни. Чертежи исключают ошибки строителей и экономят до 20% бюджета.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-10">
               <div v-for="(item, i) in processItems" :key="i" class="bg-white p-4 rounded-[20px] flex items-center gap-3 shadow-sm">
                 <div class="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-black">
                   <component :is="item.icon" />
                 </div>
                 <span class="font-bold text-sm">{{ item.label }}</span>
               </div>
            </div>
            <Button variant="primary" class="h-16 w-full md:w-auto">Заказать проект</Button>
          </div>
          <div class="relative">
             <div class="aspect-square bg-zinc-200 rounded-[32px] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
               <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" />
             </div>
             <div class="absolute -bottom-8 -left-8 w-2/3 aspect-video bg-white rounded-[24px] overflow-hidden shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500 delay-100">
               <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Layout, Layers, Zap, Droplets, Paintbrush, Hammer, Wrench, Lightbulb, Pipette } from 'lucide-vue-next'

const { t, language } = useLanguage()
const { fetchServices, fetchCatalog } = useApi()

const loading = ref(true)
const rawServicesData = ref<any[]>([])
const rawCatalogData = ref<any[]>([])

const getIcon = (name: string) => {
  const iconMap: any = { Layout, Layers, Zap, Droplets, Paintbrush, Hammer, Wrench, Lightbulb, Pipette }
  return iconMap[name] || Wrench
}

const getLocalized = (field: any, fallback: string = '') => {
  const lang = language.value
  if (!field) return fallback
  if (typeof field === 'object') return field[lang] || field.ru || field.uz || field.en || fallback
  return field
}


onMounted(async () => {
  try {
    const [servicesData, catalogData] = await Promise.all([
      fetchServices(),
      fetchCatalog()
    ])
    
    if (Array.isArray(servicesData)) {
      rawServicesData.value = servicesData
    }
    
    if (Array.isArray(catalogData)) {
      rawCatalogData.value = catalogData
    }
  } catch (e) {
    console.error('Failed to fetch services:', e)
  } finally {
    loading.value = false
  }
})


const packages = computed(() => {
  const lang = language.value
  
  // Find category that contains packages (e.g. 'renovation-turnkey' or any cat that has 'economy' service)
  const pkgCat = rawServicesData.value.find(cat => 
    cat.id === 'renovation-turnkey' || 
    cat.services?.some((s: any) => ['economy', 'standard', 'premium', 'cosmetic', 'capital', 'designer'].includes(String(s.id).toLowerCase()))
  )

  const servicesList = pkgCat?.services || (Array.isArray(rawServicesData.value[0]?.services) ? null : rawServicesData.value)
  
  if (servicesList && servicesList.length > 0) {
    return servicesList.filter((s: any) => s.id !== 'renovation-turnkey').map((pkg: any) => {
      const pkgId = String(pkg.id).toLowerCase()
      return {
        id: pkgId,
        title: getLocalized(pkg.title) || getLocalized(pkg.name) || pkg[`name_${lang}`] || 'Услуга',

        price: pkg.price != null ? String(pkg.price) : 'По запросу',
        unit: getLocalized(pkg.unit) || t.value.servicesPage.perSquareMeter,
        desc: getLocalized(pkg.description) || getLocalized(pkg.desc) || pkg[`description_${lang}`] || '',
        features: Array.isArray(pkg.features) ? pkg.features : (pkg.features ? pkg.features.split('\n') : []),
        isBlack: pkg.is_dark || pkg.isBlack,
        image: pkg.image || "https://images.unsplash.com/photo-1759722668087-efcc63c91ed2?auto=format&fit=crop&q=80&w=1080"
      }
    })

  }

  return [
    {
      title: t.value.services.cosmetic,
      price: "1 800 000",
      unit: t.value.servicesPage.perSquareMeter,
      desc: t.value.services.cosmeticDesc,
      features: t.value.servicesPage.features.cosmetic,
      isBlack: false,
      image: "https://images.unsplash.com/photo-1759722668087-efcc63c91ed2?auto=format&fit=crop&q=80&w=1080"
    },
    {
      title: t.value.services.capital,
      price: "2 500 000",
      unit: t.value.servicesPage.perSquareMeter,
      desc: t.value.services.capitalDesc,
      features: t.value.servicesPage.features.capital,
      isBlack: false,
      image: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?auto=format&fit=crop&q=80&w=1080"

    },
    {
      title: t.value.services.designer,
      price: "4 500 000",
      unit: t.value.servicesPage.perSquareMeter,
      desc: t.value.services.designerDesc,
      features: t.value.servicesPage.features.designer,
      isBlack: false,
      image: "https://images.unsplash.com/photo-1760611655987-d348d6d28174?auto=format&fit=crop&q=80&w=1080"
    }
  ]
})


const individualWorks = computed(() => {
  const lang = language.value
  
  // Exclude the package category from individual works
  const pkgCat = rawServicesData.value.find(cat => 
    cat.id === 'renovation-turnkey' || 
    cat.services?.some((s: any) => ['economy', 'standard', 'premium', 'cosmetic', 'capital', 'designer'].includes(String(s.id).toLowerCase()))
  )

  const workCategories = rawServicesData.value.filter(cat => cat !== pkgCat && cat.services)

  if (workCategories.length > 0) {
    return workCategories.map(cat => ({
      cat: getLocalized(cat.title) || getLocalized(cat.name) || 'Категория',
      icon: cat.icon,
      items: Array.isArray(cat.services) ? cat.services.map((item: any) => ({
        name: getLocalized(item.name) || 'Услуга',
        price: item.price != null ? String(item.price) : '',
        unit: getLocalized(item.unit) || ''
      })) : []
    }))
  }

  // Fallback to local translations if API is empty
  return [
    { cat: t.value.servicesPage.demolition, items: t.value.servicesPage.works.demolition, icon: 'Hammer' },
    { cat: t.value.servicesPage.electrical, items: t.value.servicesPage.works.electrical, icon: 'Zap' },
    { cat: t.value.servicesPage.finishing, items: t.value.servicesPage.works.finishing, icon: 'Paintbrush' },
    { cat: t.value.servicesPage.tiles, items: t.value.servicesPage.works.tiles, icon: 'Pipette' },
  ]
})


const processItems = [
  { icon: Layout, label: 'Планировка' },
  { icon: Layers, label: '3D Виды' },
  { icon: Zap, label: 'Электрика' },
  { icon: Droplets, label: 'Сантехника' }
]
</script>
