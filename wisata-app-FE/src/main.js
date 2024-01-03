import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './routes'
// import globalMixin from './plugins/global-mixin';

const app = createApp(App)

// app.mixin(globalMixin);

app.use(PrimeVue)
app.use(createPinia())
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
