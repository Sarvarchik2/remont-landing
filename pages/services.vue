<template>
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6">
      <SectionHeading :title="t.servicesPage.title" :subtitle="t.servicesPage.subtitle" center />

      <!-- Packages -->
      <div class="flex flex-col gap-8 mb-32">
        <ServicePackage 
          v-for="(pkg, i) in packages"
          :key="i"
          :index="i"
          :title="pkg.title"
          :price="pkg.price"
          :unit="pkg.unit"
          :description="pkg.desc"
          :features="pkg.features"
          :image="pkg.image"
          :isReversed="i % 2 !== 0"
          :isDark="pkg.isBlack"
          @select="() => {}"
        />
      </div>

      <!-- Categories Section -->
      <div class="max-w-5xl mx-auto mb-32">
        <SectionHeading :title="t.servicesPage.individualWorks" :subtitle="t.servicesPage.individualDesc" />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div v-for="(category, idx) in individualWorks" :key="idx">
            <h3 class="text-2xl font-bold mb-8 border-b-2 border-black pb-4 inline-block">{{ category.cat }}</h3>
            <div class="space-y-6">
              <div v-for="(item, i) in category.items" :key="i" class="flex justify-between items-end group">
                <div class="relative z-10 bg-white pr-4 text-lg font-medium text-zinc-800 group-hover:text-[#FFB800] transition-colors">
                  {{ item.name }}
                </div>
                <div class="flex-1 border-b-2 border-dotted border-zinc-200 mb-1.5 mx-2"></div>
                <div class="relative z-10 bg-white pl-4 text-lg font-bold text-black whitespace-nowrap">
                  {{ item.price }}
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
import { computed } from 'vue'
import { Layout, Layers, Zap, Droplets } from 'lucide-vue-next'

const { t } = useLanguage()

const packages = computed(() => [
  {
    title: t.value.services.cosmetic,
    price: "180",
    unit: t.value.servicesPage.perSquareMeter,
    desc: t.value.services.cosmeticDesc,
    features: t.value.servicesPage.features.cosmetic,
    isBlack: false,
    image: "https://images.unsplash.com/photo-1759722668087-efcc63c91ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxMDU5MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: t.value.services.capital,
    price: "250",
    unit: t.value.servicesPage.perSquareMeter,
    desc: t.value.services.capitalDesc,
    features: t.value.servicesPage.features.capital,
    isBlack: true,
    image: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBiYXRocm9vbSUyMHJlbm92YXRpb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzEwNTkwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: t.value.services.designer,
    price: "350+",
    unit: t.value.servicesPage.perSquareMeter,
    desc: t.value.services.designerDesc,
    features: t.value.servicesPage.features.designer,
    isBlack: false,
    image: "https://images.unsplash.com/photo-1760611655987-d348d6d28174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbiUyMGRhcmslMjBtb29keSUyMGVsZWdhbnR8ZW58MXx8fHwxNzcxMDU5MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
])

const individualWorks = computed(() => [
  { cat: t.value.servicesPage.demolition, items: t.value.servicesPage.works.demolition },
  { cat: t.value.servicesPage.electrical, items: t.value.servicesPage.works.electrical },
  { cat: t.value.servicesPage.finishing, items: t.value.servicesPage.works.finishing },
  { cat: t.value.servicesPage.tiles, items: t.value.servicesPage.works.tiles },
])

const processItems = [
  { icon: Layout, label: 'Планировка' },
  { icon: Layers, label: '3D Виды' },
  { icon: Zap, label: 'Электрика' },
  { icon: Droplets, label: 'Сантехника' }
]
</script>
