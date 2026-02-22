<template>
  <section :class="cn('py-24 md:py-32', isDark ? 'bg-black text-white' : 'bg-white text-black')">
    <div class="container mx-auto px-6">
      <div :class="cn(
        'flex flex-col gap-16 items-center',
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )">
        
        <!-- Image Side -->
        <div class="w-full lg:w-1/2 opacity-100 transform translate-x-0 transition-all duration-1000">
          <div class="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl group">
            <img 
              :src="image" 
              :alt="title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div :class="cn(
              'absolute inset-0 bg-gradient-to-t opacity-40',
              isDark ? 'from-black via-transparent to-transparent' : 'from-black/50 via-transparent to-transparent'
            )" />
            
            <!-- Optional Badge -->
            <div class="absolute bottom-8 left-8 right-8">
               <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white mb-4">
                  <span class="w-2 h-2 bg-[#FFB800] rounded-full animate-pulse"></span>
                  <span class="text-xs font-bold uppercase tracking-widest">RemontUz Premium</span>
               </div>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div class="w-full lg:w-1/2 opacity-100 transform translate-y-0 transition-all duration-1000">
          <div class="flex items-baseline gap-2 mb-6">
            <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight">{{ title }}</h2>
            <span :class="cn('text-xl font-bold opacity-50', isDark ? 'text-zinc-500' : 'text-zinc-400')">0{{ index + 1 }}</span>
          </div>
          
          <p :class="cn('text-xl leading-relaxed mb-10 max-w-lg', isDark ? 'text-zinc-400' : 'text-zinc-500')">
            {{ description }}
          </p>

          <div class="mb-12">
             <div class="flex items-baseline gap-2 mb-2">
               <span class="text-5xl font-black">{{ price }}</span>
               <span :class="cn('text-xl font-medium', isDark ? 'text-zinc-500' : 'text-zinc-400')">{{ unit }}</span>
             </div>
             <div :class="cn('h-1 w-24 rounded-full', isDark ? 'bg-zinc-800' : 'bg-zinc-100')">
                <div class="h-full bg-[#FFB800] w-2/3 rounded-full"></div>
             </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
            <div v-for="(feature, i) in features" :key="i" class="flex items-start gap-3">
              <div :class="cn(
                'w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5',
                isDark ? 'bg-zinc-800 text-[#FFB800]' : 'bg-[#FFB800]/10 text-[#FFB800]'
              )">
                <Check :size="14" :strokeWidth="3" />
              </div>
              <span :class="cn('font-medium text-sm leading-relaxed', isDark ? 'text-zinc-300' : 'text-zinc-600')">
                {{ feature }}
              </span>
            </div>
          </div>

          <button 
            @click="$emit('select')"
            :class="cn(
              'h-16 px-10 rounded-full font-bold text-lg tracking-wide transition-all duration-300 flex items-center gap-4 group',
              isDark 
                ? 'bg-[#FFB800] text-black hover:bg-[#e0a200] shadow-xl shadow-[#FFB800]/20' 
                : 'bg-[#FFB800] text-black hover:bg-[#e0a200] shadow-xl shadow-[#FFB800]/20'
            )"
          >
            {{ actionLabel }}
            <ArrowRight class="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, ArrowRight } from 'lucide-vue-next'
import { cn } from '~/utils/cn'

defineProps<{
  title: string
  price: string
  unit: string
  description: string
  features: string[]
  image: string
  isReversed?: boolean
  isDark?: boolean
  index: number
  actionLabel?: string
}>()

defineEmits(['select'])
</script>
