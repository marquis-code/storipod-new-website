import { createGtag } from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const getGDPR = process.client ? localStorage.getItem('GDPR:accepted') : null
  
  if (getGDPR === 'yes') {
    nuxtApp.vueApp.use(createGtag({
      config: {
        id: 'UA-XXXXXX-X'
      }
    }))
  }
})