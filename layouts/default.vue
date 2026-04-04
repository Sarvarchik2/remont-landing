<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Vicasa",
        "legalName": "Vicasa Group",
        "image": "https://vicasa.uz/logo.png",
        "@id": "https://vicasa.uz",
        "url": "https://vicasa.uz",
        "telephone": "+998 90 354-76-66",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ташкент, Центр",
          "addressLocality": "Tashkent",
          "addressRegion": "Tashkent",
          "postalCode": "100000",
          "addressCountry": "UZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.311081,
          "longitude": 69.240562
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://www.instagram.com/vicasa.group/",
          "https://t.me/vicasa_bot"
        ]
      })
    }
  ]
})
</script>
