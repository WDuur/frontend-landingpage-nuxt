// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/styles.scss'],
  modules: ['@nuxt/ui'],
  build: {
    transpile: ['gsap'],
  },
})
