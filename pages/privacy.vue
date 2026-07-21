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
    ? 'Политика конфиденциальности | Vicasa'
    : 'Maxfiylik siyosati | Vicasa'),
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})

const content = {
  ru: {
    title: 'Политика конфиденциальности',
    updated: 'Обновлено: 2026',
    contact: 'По вопросам обработки персональных данных пишите:',
    sections: [
      { h: '1. Общие положения', p: 'Настоящая Политика определяет порядок обработки персональных данных пользователей сайта vicasa.uz (далее — «Сайт»). Оставляя заявку, вы соглашаетесь с условиями этой Политики.' },
      { h: '2. Какие данные мы собираем', p: 'Мы собираем имя и номер телефона, которые вы указываете в формах заявки и калькуляторе, а также технические данные (тип устройства, страницы просмотра) для улучшения работы Сайта.' },
      { h: '3. Цели обработки', p: 'Данные используются исключительно для связи с вами, консультации по услугам ремонта, подготовки сметы и выполнения договорных обязательств. Мы не передаём ваши данные третьим лицам, кроме случаев, предусмотренных законодательством Республики Узбекистан.' },
      { h: '4. Хранение и защита', p: 'Мы принимаем организационные и технические меры для защиты данных от несанкционированного доступа. Данные хранятся не дольше, чем это необходимо для указанных целей.' },
      { h: '5. Ваши права', p: 'Вы вправе запросить удаление или изменение своих данных, а также отозвать согласие на их обработку, обратившись к нам по указанным контактам.' },
    ],
  },
  uz: {
    title: 'Maxfiylik siyosati',
    updated: 'Yangilangan: 2026',
    contact: "Shaxsiy ma'lumotlarni qayta ishlash bo'yicha savollar uchun yozing:",
    sections: [
      { h: '1. Umumiy qoidalar', p: "Ushbu Siyosat vicasa.uz sayti foydalanuvchilarining shaxsiy ma'lumotlarini qayta ishlash tartibini belgilaydi. Ariza qoldirib, siz ushbu Siyosat shartlariga rozilik bildirasiz." },
      { h: "2. Qanday ma'lumotlarni yig'amiz", p: "Biz ariza shakllari va kalkulyatorda ko'rsatgan ismingiz va telefon raqamingizni, shuningdek saytni yaxshilash uchun texnik ma'lumotlarni yig'amiz." },
      { h: '3. Qayta ishlash maqsadlari', p: "Ma'lumotlar faqat siz bilan bog'lanish, ta'mirlash xizmatlari bo'yicha maslahat, smeta tayyorlash uchun ishlatiladi. Biz ma'lumotlaringizni O'zbekiston Respublikasi qonunchiligida nazarda tutilgan hollardan tashqari uchinchi shaxslarga bermaymiz." },
      { h: '4. Saqlash va himoya', p: "Biz ma'lumotlarni ruxsatsiz kirishdan himoya qilish uchun tashkiliy va texnik choralarni ko'ramiz." },
      { h: '5. Sizning huquqlaringiz', p: "Siz ko'rsatilgan kontaktlar orqali murojaat qilib, ma'lumotlaringizni o'chirish yoki o'zgartirishni so'rashga haqlisiz." },
    ],
  },
}

const c = computed(() => content[language.value] || content.ru)
</script>
