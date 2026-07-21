<template>
  <div class="pt-32 pb-24 bg-white min-h-screen">
    <div class="container mx-auto px-6 max-w-3xl">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">{{ c.title }}</h1>
      <p class="text-zinc-400 mb-12">{{ c.updated }}</p>

      <div class="space-y-10">
        <section v-for="(s, i) in c.sections" :key="i">
          <h2 class="text-2xl font-bold mb-4">{{ s.h }}</h2>
          <p class="text-zinc-600 leading-relaxed whitespace-pre-line">{{ s.p }}</p>
        </section>
      </div>

      <div class="mt-16 p-8 bg-zinc-50 rounded-[24px]">
        <p class="text-zinc-600">{{ c.contact }} <a href="mailto:info@vicasa.uz" class="font-bold text-[#FFB800]">info@vicasa.uz</a>, +998 90 354-76-66</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { language } = useLanguage()

useHead({
  title: computed(() => language.value === 'ru'
    ? 'Условия использования | Vicasa'
    : 'Foydalanish shartlari | Vicasa'),
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})

const content = {
  ru: {
    title: 'Условия использования',
    updated: 'Обновлено: 2026',
    contact: 'По любым вопросам свяжитесь с нами:',
    sections: [
      { h: '1. Общие условия', p: 'Сайт vicasa.uz предоставляет информацию об услугах ремонта и отделки компании Vicasa. Используя Сайт, вы принимаете настоящие Условия.' },
      { h: '2. Услуги и цены', p: 'Все цены и сроки, указанные на Сайте и в калькуляторе, являются ориентировочными. Точная стоимость определяется после замера объекта и фиксируется в договоре.' },
      { h: '3. Заявки', p: 'Оставляя заявку, вы подтверждаете достоверность указанных контактных данных и соглашаетесь на обратную связь со стороны компании.' },
      { h: '4. Интеллектуальная собственность', p: 'Все материалы Сайта (тексты, изображения, логотипы) принадлежат Vicasa и не могут использоваться без письменного разрешения.' },
      { h: '5. Ответственность', p: 'Компания не несёт ответственности за возможные технические перебои в работе Сайта. Условия оказания услуг регулируются отдельным договором.' },
    ],
  },
  uz: {
    title: 'Foydalanish shartlari',
    updated: 'Yangilangan: 2026',
    contact: "Har qanday savol bo'yicha biz bilan bog'laning:",
    sections: [
      { h: '1. Umumiy shartlar', p: "vicasa.uz sayti Vicasa kompaniyasining ta'mirlash va pardozlash xizmatlari haqida ma'lumot beradi. Saytdan foydalanib, siz ushbu Shartlarni qabul qilasiz." },
      { h: '2. Xizmatlar va narxlar', p: "Saytda va kalkulyatorda ko'rsatilgan barcha narx va muddatlar taxminiydir. Aniq narx ob'ektni o'lchagandan so'ng belgilanadi va shartnomada qayd etiladi." },
      { h: '3. Arizalar', p: "Ariza qoldirib, siz ko'rsatilgan kontakt ma'lumotlarining to'g'riligini tasdiqlaysiz va kompaniya bilan aloqaga rozilik bildirasiz." },
      { h: '4. Intellektual mulk', p: "Saytning barcha materiallari (matnlar, tasvirlar, logotiplar) Vicasa'ga tegishli va yozma ruxsatsiz ishlatilishi mumkin emas." },
      { h: '5. Javobgarlik', p: "Kompaniya saytdagi texnik uzilishlar uchun javobgar emas. Xizmat ko'rsatish shartlari alohida shartnoma bilan tartibga solinadi." },
    ],
  },
}

const c = computed(() => content[language.value] || content.ru)
</script>
