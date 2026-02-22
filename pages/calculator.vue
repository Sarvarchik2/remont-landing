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
            <div class="grid grid-cols-2 gap-4">
              <button
                v-for="typeId in ['new', 'secondary']"
                :key="typeId"
                @click="formData.type = typeId"
                :class="cn(
                  'py-6 rounded-[24px] font-bold text-lg transition-all',
                  formData.type === typeId 
                    ? 'bg-[#FFB800] text-black shadow-lg' 
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                )"
              >
                {{ typeId === 'new' ? t.calculatorPage.apartment : t.calculatorPage.house }}
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

          <Button @click="calculate" variant="primary" class="w-full h-16 text-lg">
            {{ t.calculatorPage.calculate }}
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
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'

const { t } = useLanguage()

const step = ref(1)
const formData = ref({ area: 60, type: 'new', design: true })
const result = ref<number | null>(null)

const calculate = () => {
  step.value = 2
  setTimeout(() => {
    result.value = formData.value.area * (formData.value.type === 'new' ? 2500000 : 3200000)
    step.value = 3
  }, 1500)
}
</script>
