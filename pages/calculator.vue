<template>
  <div class="pt-32 pb-24 min-h-screen bg-white text-zinc-900">
    <div class="container mx-auto px-6 max-w-4xl">
      <SectionHeading :title="t.calculatorPage.title" :subtitle="t.calculatorPage.subtitle" center />
      
      <div class="bg-white text-zinc-900 rounded-[40px] p-8 md:p-16 shadow-2xl border border-zinc-100">
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
              class="w-full h-4 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-[#FFB800]"
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
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 border border-zinc-200/50'
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
                    ? 'bg-zinc-900 text-white shadow-lg' 
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 border border-zinc-200/50'
                )"


              >
                {{ (t.calculatorPage as any)[tier] }}
              </button>
            </div>
          </div>

          <!-- Design Switch -->
          <div class="flex items-center justify-between p-6 bg-zinc-50 rounded-[24px] border border-zinc-100">
             <div class="font-bold text-lg">{{ t.calculatorPage.additional }}</div>
             <button 
              @click="formData.design = !formData.design"
              :class="cn(
                'w-16 h-9 rounded-full relative transition-colors duration-300',
                formData.design ? 'bg-[#FFB800]' : 'bg-zinc-300'
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
          <h3 class="text-2xl font-bold text-zinc-900">Считаем смету...</h3>
        </div>


        <div v-else-if="step === 3 && result !== null" class="text-center py-10">
           <div class="w-24 h-24 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#FFB800]/20">
             <Check :size="40" class="text-black" />
           </div>
           <h3 class="text-2xl font-bold text-zinc-400 mb-2">{{ t.calculatorPage.result }}</h3>
           <div class="text-5xl md:text-6xl font-extrabold text-zinc-900 mb-10">
             {{ result.toLocaleString() }} <span class="text-3xl text-zinc-500">сум</span>
           </div>
           <div class="flex flex-col gap-4 max-w-md mx-auto">
             <Button @click="step = 4" class="w-full h-16 text-lg">{{ t.calculatorPage.requestQuote }}</Button>
             <Button variant="outline" @click="step = 1" class="w-full h-16 text-lg border-zinc-200 text-zinc-900 hover:text-[#FFB800]">{{ t.calculatorPage.back }}</Button>
           </div>
        </div>


        <div v-else-if="step === 4" class="space-y-8">
          <SectionHeading :title="t.calculatorPage.requestQuote" subtitle="Оставьте контакты" />
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">{{ t.calculatorPage.name }}</label>
              <input 
                v-model="contactData.name" 
                type="text" 
                class="w-full h-16 bg-zinc-50 border border-zinc-200 rounded-[20px] px-6 text-zinc-900 focus:border-[#FFB800] outline-none transition-colors"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label class="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">{{ t.calculatorPage.phone }}</label>
              <input 
                v-model="contactData.phone" 
                type="tel" 
                class="w-full h-16 bg-zinc-50 border border-zinc-200 rounded-[20px] px-6 text-zinc-900 focus:border-[#FFB800] outline-none transition-colors"
                placeholder="+998 90 123-45-67"
              />
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <Button @click="submitLead" variant="primary" class="w-full h-16 text-lg" :disabled="submitting || !contactData.name || !contactData.phone">
              {{ submitting ? 'Отправка...' : 'Отправить заявку' }}
            </Button>
            <Button variant="outline" @click="step = 3" class="w-full h-16 text-lg border-zinc-200 text-zinc-900" :disabled="submitting">
              {{ t.calculatorPage.back }}
            </Button>
          </div>
        </div>


        <div v-else-if="step === 5" class="py-20 text-center">
           <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
             <Check :size="40" class="text-white" />
           </div>
           <h3 class="text-3xl font-bold text-zinc-900 mb-4">{{ t.calculatorPage.successTitle }}</h3>
           <p class="text-xl text-zinc-500 mb-10">{{ t.calculatorPage.successDesc }}</p>
           <Button variant="primary" @click="step = 1" class="w-full h-16 max-w-xs mx-auto">Вернуться в начало</Button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Check } from 'lucide-vue-next'
import { cn } from '~/utils/cn'

const route = useRoute()


const { t, language } = useLanguage()
const { fetchSettings, createLead } = useApi()

const step = ref(1)
const loading = ref(true)
const submitting = ref(false)
const prices = ref<any[]>([])
const formData = ref({ area: 60, type: 'new', tier: 'standard', design: true })
const contactData = ref({ name: '', phone: '' })
const result = ref<number | null>(null)

const calculate = () => {
  step.value = 2
  setTimeout(() => {
    const selectedType = prices.value.find(p => p.id === formData.value.type)
    const basePrice = selectedType ? selectedType[formData.value.tier] : 1800000
    
    let total = formData.value.area * basePrice
    if (formData.value.design) {
      // Logic for design project can be adjusted, using 150k per m2 as default
      total += formData.value.area * 150000 
    }
    
    result.value = total
    step.value = 3
  }, 1000)
}

const submitLead = async () => {
  if (!contactData.value.name || !contactData.value.phone) return

  submitting.value = true
  try {
    const leadData = {
      id: "web_" + Date.now().toString(),
      name: contactData.value.name,
      phone: contactData.value.phone,
      source: "calculator",
      status: "new",
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      calculatorData: {
        area: formData.value.area,
        type: formData.value.type,
        level: formData.value.tier,
        estimatedCost: result.value
      },
      notes: `Заявка с калькулятора. Дизайн-проект: ${formData.value.design ? 'Да' : 'Нет'}`
    }

    await createLead(leadData)
    step.value = 5
  } catch (e) {
    console.error('Failed to submit lead:', e)
    alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.')
  } finally {
    submitting.value = false
  }
}


onMounted(async () => {
  if (route.query.tier) {
    formData.value.tier = String(route.query.tier).toLowerCase()
  }
  
  try {
    const data: any = await fetchSettings()

    const getLocalized = (field: any, fallback: string = '') => {
      if (!field) return fallback
      if (typeof field === 'object') return field[language.value] || field.ru || field.uz || field.en || fallback
      return field
    }

    if (Array.isArray(data) && data.length > 0 && data[0].prices) {
      prices.value = data[0].prices.map((p: any) => ({
        ...p,
        label: getLocalized(p.label) || p[`label_${language.value}`] || p.label
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
