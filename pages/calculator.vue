<template>
  <div class="pt-32 pb-24 min-h-screen bg-black text-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <SectionHeading :title="t.calculatorPage.title" :subtitle="t.calculatorPage.subtitle" center dark />
      
      <div class="bg-zinc-900 rounded-[40px] p-8 md:p-16 shadow-xl border border-zinc-800">
        <div v-if="step === 1" class="space-y-12">
          <!-- Area Slider -->
          <div>
            <div class="flex justify-between items-end mb-6">
               <label class="text-xl font-bold">{{ t.calculatorPage.area }}</label>
               <div class="text-4xl font-extrabold text-[#FFB800]">{{ formData.area }} <span class="text-xl text-zinc-500">м²</span></div>
            </div>
            <input 
              type="range" 
              min="20" 
              max="200" 
              v-model="formData.area"
              class="w-full h-4 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-[#FFB800]"
            />
          </div>

          <!-- Type Toggle -->
          <div>
            <label class="text-xl font-bold block mb-6">{{ t.calculatorPage.roomType }}</label>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                v-for="p in prices"
                :key="p.id"
                @click="formData.type = p.id"
                :class="cn(
                  'py-4 px-6 rounded-[24px] font-bold text-lg transition-all text-center',
                  formData.type === p.id 
                    ? 'bg-[#FFB800] text-black shadow-lg' 
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                )"
              >
                {{ p.label }}
              </button>
            </div>
          </div>

          <!-- Quality Tier -->
          <div>
            <label class="text-xl font-bold block mb-6">{{ t.calculatorPage.renovationType }}</label>
            <div class="grid grid-cols-3 gap-4">
              <button
                v-for="tier in ['economy', 'standard', 'premium']"
                :key="tier"
                @click="formData.tier = tier"
                :class="cn(
                  'py-4 rounded-[20px] font-bold text-sm md:text-base transition-all',
                  formData.tier === tier 
                    ? 'bg-white text-black shadow-lg' 
                    : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700'
                )"
              >
                {{ (t.calculatorPage as any)[tier] }}
              </button>
            </div>
          </div>

          <!-- Design Switch -->
          <div class="flex items-center justify-between p-6 bg-zinc-800 rounded-[24px]">
             <div class="font-bold text-lg">{{ t.calculatorPage.additional }}</div>
             <button 
              @click="formData.design = !formData.design"
              :class="cn(
                'w-16 h-9 rounded-full relative transition-colors duration-300',
                formData.design ? 'bg-[#FFB800]' : 'bg-zinc-600'
              )"
            >
              <div :class="cn(
                'absolute top-1 w-7 h-7 bg-white rounded-full transition-transform duration-300 shadow-sm',
                formData.design ? 'left-8' : 'left-1'
              )" />
            </button>
          </div>

          <Button @click="calculate" variant="primary" class="w-full h-16 text-lg" :disabled="loading">
            {{ loading ? 'Загрузка цен...' : t.calculatorPage.calculate }}
          </Button>
        </div>

        <div v-else-if="step === 2" class="py-20 text-center">
          <div class="w-16 h-16 border-4 border-[#FFB800] border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
          <h3 class="text-2xl font-bold text-white">Считаем смету...</h3>
        </div>

        <div v-else-if="step === 3 && result !== null" class="text-center py-10">
           <div class="w-24 h-24 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#FFB800]/20">
             <Check :size="40" class="text-black" />
           </div>
           <h3 class="text-2xl font-bold text-zinc-400 mb-2">{{ t.calculatorPage.result }}</h3>
           <div class="text-5xl md:text-6xl font-extrabold text-white mb-10">
             {{ result.toLocaleString() }} <span class="text-3xl text-zinc-500">сум</span>
           </div>
           <div class="flex flex-col gap-4 max-w-md mx-auto">
             <Button class="w-full h-16 text-lg">{{ t.calculatorPage.requestQuote }}</Button>
             <Button variant="outline" @click="step = 1" class="w-full h-16 text-lg border-zinc-700 text-white hover:text-[#FFB800]">{{ t.calculatorPage.back }}</Button>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Check } from 'lucide-vue-next'
import { cn } from '~/utils/cn'

const { t, language } = useLanguage()
const { fetchSettings } = useApi()

const step = ref(1)
const loading = ref(true)
const prices = ref<any[]>([])
const formData = ref({ area: 60, type: 'new', tier: 'standard', design: true })
const result = ref<number | null>(null)

const calculate = () => {
  step.value = 2
  setTimeout(() => {
    const selectedType = prices.value.find(p => p.id === formData.value.type)
    const basePrice = selectedType ? selectedType[formData.value.tier] : 1800000
    
    let total = formData.value.area * basePrice
    if (formData.value.design) {
      total += formData.value.area * 150000 // Add 150k per m2 for design
    }
    
    result.value = total
    step.value = 3
  }, 1000)
}

onMounted(async () => {
  try {
    const data: any = await fetchSettings()
    const lang = language.value
    
    if (Array.isArray(data) && data.length > 0 && data[0].prices) {
      prices.value = data[0].prices.map((p: any) => ({
        ...p,
        label: p[`label_${lang}`] || p.label
      }))
    } else {
      // Fallback
      prices.value = [
        { id: 'new', label: t.value.calculatorPage.apartment, economy: 1200000, standard: 1800000, premium: 3500000 },
        { id: 'secondary', label: t.value.calculatorPage.apartment, economy: 1500000, standard: 2200000, premium: 4000000 },
        { id: 'house', label: t.value.calculatorPage.house, economy: 2000000, standard: 3000000, premium: 5000000 }
      ]
    }
  } catch (e) {
    console.error('Failed to fetch prices:', e)
  } finally {
    loading.value = false
  }
})
</script>
