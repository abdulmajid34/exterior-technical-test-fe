import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './routes'
// import globalMixin from './plugins/global-mixin';

// import component primeVue
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast'
import ToastService from 'primevue/ToastService'
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Skeleton from 'primevue/skeleton';

import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.scss';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-blue/theme.css'
// import 'primevue/resources/themes/lara-light-green/theme.css'

(async () => {
  const app = createApp(App)

  // app.mixin(globalMixin);
  app.use(PrimeVue)
  app.use(createPinia())
  app.use(router)
  app.use(ToastService)
  app.mount('#app')
  // router.isReady().then(() => {
  // });

  app.component('Button', Button);
  app.component('InputText', InputText);  
  app.component('Toast', Toast);  
  app.component('ToastService', ToastService);  
  app.component('Menubar', Menubar);  
  app.component('Avatar', Avatar);  
  app.component('Toolbar', Toolbar);  
  app.component('Card', Card);  
  app.component('Image', Image);  
  app.component('Skeleton', Skeleton);  
  
})();


