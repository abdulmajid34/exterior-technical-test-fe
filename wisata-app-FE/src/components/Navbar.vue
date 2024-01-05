<script setup>
import { ref } from "vue";
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'Location',
        icon: 'pi pi-map',
        route: '/location'
    },
    {
        label: 'Tentang Kami',
        icon: 'pi pi-user'
    },    
    {
        label: 'Contact',
        icon: 'pi pi-envelope',        
    }
]);
</script>

<template>
    <section>
      <div class="">
          <Menubar :model="items">
              <template #start>
                  <h2 class="px-4">Wisata App</h2>
              </template>
              <template #item="{ item, props }">
                  <a v-ripple class="flex align-items-center" v-bind="props.action">
                      <span :class="item.icon" />
                      <router-link :to="`${item.route}`">
                        <span class="ml-2">{{ item.label }}</span>                      
                      </router-link>
                  </a>
              </template>
              <template #end>
                  <div class="flex align-items-center gap-2">                    
                      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                  </div>
              </template>
          </Menubar>
      </div>
    </section>
</template>