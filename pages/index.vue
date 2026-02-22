<template>
  <main class="bg-white">
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center pt-20">
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative z-10">
          <div class="animate-fade-in-up">
            <div class="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full mb-8">
              <Star :size="14" class="fill-[#FFB800] text-[#FFB800]" />
              <span class="text-xs font-bold uppercase tracking-widest">{{ t.hero.badge }}</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-extrabold text-black leading-[1.05] mb-8 tracking-tight">
              {{ t.hero.title1 }}<br />
              <span class="text-zinc-400">{{ t.hero.title2 }}</span>{{ t.hero.title3 }}
            </h1>
            <p class="text-xl text-zinc-500 max-w-lg leading-relaxed mb-10">
              {{ t.hero.description }}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/calculator">
                <Button variant="primary" class="h-14 px-8 text-base">
                  {{ t.hero.calculateCost }}
                </Button>
              </NuxtLink>
              <NuxtLink to="/portfolio">
                 <Button variant="outline" class="h-14 px-8 text-base">
                  {{ t.hero.viewProjects }}
                </Button>
              </NuxtLink>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-16 animate-fade-in-up" style="animation-delay: 200ms;">
            <StatCard number="500+" :label="t.hero.projects" />
            <StatCard number="24/7" :label="t.hero.control" />
            <StatCard number="2 г." :label="t.hero.warranty" />
          </div>
        </div>

        <div class="relative h-[80vh] w-full animate-fade-in" style="animation-delay: 400ms;">
           <div class="absolute top-0 right-0 w-full h-full bg-zinc-100 rounded-[40px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600" alt="Interior" class="w-full h-full object-cover" />
              
              <!-- Floating Card -->
              <div class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl p-6 rounded-[32px] shadow-2xl max-w-xs">
                 <div class="flex items-start gap-4 mb-4">
                   <div class="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                     <Shield :size="24" class="text-[#FFB800]" />
                   </div>
                   <div>
                     <div class="font-bold text-lg leading-tight mb-1">{{ t.floatingCard.contract }}</div>
                     <div class="text-xs text-zinc-500">{{ t.floatingCard.protection }}</div>
                   </div>
                 </div>
                 <div class="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                   <div class="h-full bg-[#FFB800] w-3/4 rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Brands Ticker -->
    <section class="py-12 border-y border-zinc-100 overflow-hidden">
      <div class="container mx-auto px-6">
        <p class="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">{{ t.brands.title }}</p>
        <div class="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto gap-12 no-scrollbar">
           <span v-for="(brand, i) in ['KNAUF', 'KERAMA MARAZZI', 'GROHE', 'DULUX', 'SCHNEIDER', 'BOSCH']" :key="i" class="text-2xl font-black text-black whitespace-nowrap">{{ brand }}</span>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-32 bg-black rounded-[40px] mx-4">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-16">
          <SectionHeading :title="t.services.title" :subtitle="t.services.subtitle" dark />
          <NuxtLink to="/services" class="hidden md:flex items-center gap-2 font-bold mb-16 text-white hover:text-[#FFB800] hover:gap-4 transition-all">
             {{ t.services.allServices }} <ArrowRight />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div class="bg-zinc-900 p-10 rounded-[40px] hover:shadow-xl transition-shadow group">
              <div class="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#FFB800]/10 transition-colors">
                <Paintbrush :size="28" class="text-[#FFB800]" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-white">{{ t.services.cosmetic }}</h3>
              <p class="text-zinc-400 mb-8">{{ t.services.cosmeticDesc }}</p>
              <div class="text-3xl font-extrabold mb-8 text-white">180 <span class="text-lg text-zinc-500 font-medium">$/м²</span></div>
              <NuxtLink to="/services"><Button variant="outline" class="w-full text-white border-zinc-700 hover:border-[#FFB800] hover:text-[#FFB800]">{{ t.services.details }}</Button></NuxtLink>
           </div>
           
           <div class="bg-white p-10 rounded-[40px] shadow-2xl scale-105 z-10 relative overflow-hidden border-2 border-[#FFB800]">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFB800] opacity-10 blur-[80px] rounded-full"></div>
              <div class="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-8">
                <Hammer :size="28" class="text-[#FFB800]" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-black">{{ t.services.capital }}</h3>
              <p class="text-zinc-500 mb-8">{{ t.services.capitalDesc }}</p>
              <div class="text-3xl font-extrabold mb-8 text-black">250 <span class="text-lg text-zinc-400 font-medium">$/м²</span></div>
              <NuxtLink to="/services"><Button variant="white" class="w-full bg-[#FFB800] text-black border-none hover:bg-[#e0a200]">{{ t.services.details }}</Button></NuxtLink>
           </div>

           <div class="bg-zinc-900 p-10 rounded-[40px] hover:shadow-xl transition-shadow group">
              <div class="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#FFB800]/10 transition-colors">
                <Layers :size="28" class="text-[#FFB800]" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-white">{{ t.services.designer }}</h3>
              <p class="text-zinc-400 mb-8">{{ t.services.designerDesc }}</p>
              <div class="text-3xl font-extrabold mb-8 text-white">350+ <span class="text-lg text-zinc-500 font-medium">$/м²</span></div>
              <NuxtLink to="/services"><Button variant="outline" class="w-full text-white border-zinc-700 hover:border-[#FFB800] hover:text-[#FFB800]">{{ t.services.details }}</Button></NuxtLink>
           </div>
        </div>
      </div>
    </section>

    <!-- Before/After -->
    <section class="py-24 mx-4">
      <div class="container mx-auto px-6">
          <SectionHeading :title="t.beforeAfter.title" :subtitle="t.beforeAfter.subtitle" center />
          <BeforeAfterSlider />
      </div>
    </section>

    <!-- Process Steps -->
    <section class="py-32">
      <div class="container mx-auto px-6">
         <SectionHeading :title="t.process.title" :subtitle="t.process.subtitle" />
         
         <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
           <div v-for="(item, i) in processItems" :key="i" class="relative group">
             <div class="text-6xl font-black text-zinc-100 mb-4 group-hover:text-[#FFB800] transition-colors duration-500">{{ item.step }}</div>
             <h3 class="text-xl font-bold mb-3">{{ item.title }}</h3>
             <p class="text-zinc-500 leading-relaxed text-sm">{{ item.desc }}</p>
             <div v-if="i !== 3" class="hidden md:block absolute top-12 right-0 w-12 h-px bg-zinc-200 group-hover:bg-[#FFB800]/20 transition-colors"></div>
           </div>
         </div>
      </div>
    </section>

    <!-- Instagram & Social Proof -->
    <section class="py-24 bg-black text-white rounded-[40px] mx-4 overflow-hidden">
      <div class="container mx-auto px-6">
         <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div>
             <h2 class="text-4xl font-extrabold mb-4">{{ t.social.title }}</h2>
             <p class="text-zinc-400">{{ t.social.description }}</p>
           </div>
           <a href="#" class="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg">
             <Instagram :size="20" /> @remontuz
           </a>
         </div>

         <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(img, i) in instaImages" :key="i" class="aspect-square rounded-[24px] overflow-hidden group relative">
               <img :src="img" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
               <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                 <Instagram class="text-white drop-shadow-lg" :size="32" />
               </div>
            </div>
         </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-32">
      <div class="container mx-auto px-6 max-w-3xl">
         <SectionHeading :title="t.faq.title" :subtitle="t.faq.subtitle" center />
         
         <div class="space-y-2">
           <FaqItem :q="t.faq.q1" :a="t.faq.a1" />
           <FaqItem :q="t.faq.q2" :a="t.faq.a2" />
           <FaqItem :q="t.faq.q3" :a="t.faq.a3" />
           <FaqItem :q="t.faq.q4" :a="t.faq.a4" />
         </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="pb-32 px-6 text-center">
      <div class="bg-zinc-50 rounded-[40px] p-16 md:p-24">
        <h2 class="text-4xl md:text-6xl font-extrabold mb-8">{{ t.cta.title }}</h2>
        <p class="text-xl text-zinc-500 mb-12 max-w-xl mx-auto">
          {{ t.cta.description }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
           <NuxtLink to="/calculator">
             <Button class="h-16 px-10 text-lg shadow-xl shadow-black/20">{{ t.cta.schedule }}</Button>
           </NuxtLink>
           <a href="tel:+998901234567">
             <Button variant="white" class="h-16 px-10 text-lg border border-zinc-200">{{ t.cta.call }}</Button>
           </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Star, Shield, ArrowRight, Paintbrush, Hammer, Layers, Instagram } from 'lucide-vue-next'

const { t } = useLanguage()

const processItems = computed(() => [
  { step: "01", title: t.value.process.step1Title, desc: t.value.process.step1Desc },
  { step: "02", title: t.value.process.step2Title, desc: t.value.process.step2Desc },
  { step: "03", title: t.value.process.step3Title, desc: t.value.process.step3Desc },
  { step: "04", title: t.value.process.step4Title, desc: t.value.process.step4Desc },
])

const instaImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=400"
]
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s forwards;
}
.animate-fade-in {
  animation: fadeIn 1s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
