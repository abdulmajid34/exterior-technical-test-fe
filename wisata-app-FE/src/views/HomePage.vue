<script setup>  
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Location',
        icon: 'pi pi-map'
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
  <div class="background-image">
    <!-- section Navbar -->
     <section>
      <div class="">
          <Menubar :model="items">
              <template #start>
                  <h2 class="px-4">Wisata App</h2>
              </template>
              <template #item="{ item, props, hasSubmenu, root }">
                  <a v-ripple class="flex align-items-center" v-bind="props.action">
                      <span :class="item.icon" />
                      <span class="ml-2">{{ item.label }}</span>                      
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
        
  
    <!-- Main Content Section -->
    <section> 
      <div class="flex justify-content-center">
        <div class="my-4 text-center">
          <h1 style="font-size: 35px;" class="text-white">Selamat Datang di website wisata app</h1>
          <span style="font-size: 20px;" class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium dolorum voluptatibus commodi enim. Quae.</span>
        </div>
      </div>     
      <div class="flex justify-content-center">
        <!-- Centered Search Input -->
        <div class="search-container">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="value1" class="content-input" placeholder="Search Property" />
            <Button label="Search" />
        </span>
          
        </div>

      </div>
    </section>
    
  </div>
  <section class="content-style">    
    <div class="" >
      <Card class="shadow-3" style="border-radius: 3rem; margin-top: -10rem; border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <template #title> Simple Card </template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora exercitationem praesentium consectetur, temporibus nesciunt voluptatibus architecto eum. Quae voluptas totam quos ea nisi asperiores corporis nostrum, doloribus molestias veritatis. Quos esse doloremque quae voluptate vero ipsa cum expedita ducimus fugiat pariatur nihil sit dignissimos vitae accusantium impedit et ratione voluptas, voluptatum provident architecto repellat eum magnam. Modi voluptates magni culpa! Nostrum assumenda amet quae nemo nobis deserunt recusandae. Facilis cupiditate ullam suscipit assumenda fugit labore ipsam possimus, incidunt quidem necessitatibus illum nisi sit, eos veritatis non, sequi eveniet expedita alias molestiae architecto beatae sint? Expedita, rerum natus. Alias, tempora facere repudiandae perferendis voluptatem itaque veniam nulla possimus unde sint inventore quasi officia necessitatibus! Ducimus eveniet et obcaecati facere eius laborum veritatis unde veniam, aspernatur molestiae nisi sunt odit recusandae at debitis sint distinctio totam minus. Eius porro adipisci omnis voluptatem at praesentium nam corporis consequatur quia dolorem est corrupti minima atque harum hic odio aspernatur, fuga laudantium ex excepturi. Dolorum, natus! Soluta eligendi dolores cum corrupti maxime voluptatibus praesentium tempore esse dolorem amet quasi, rem vel ratione nemo maiores. Laboriosam possimus laudantium soluta iste quidem qui modi. Sit sapiente suscipit adipisci cupiditate sint? Nisi commodi expedita quia nulla, nam nemo possimus cum, corrupti, est debitis officiis autem iusto adipisci? Fuga corrupti vel, aliquid error nesciunt sint libero ipsum dicta eaque deserunt, ipsa eius, sed molestiae quidem esse? Incidunt est eius ab molestiae, facilis iste rem eum, perferendis excepturi quis officiis dolorum facere ipsa animi quia, culpa recusandae ipsum nam totam omnis! Debitis qui dignissimos non maxime corrupti hic, culpa mollitia deserunt magni ipsum. Eveniet qui, a quibusdam assumenda dolorem, ab facere error vero autem impedit quas optio! Deserunt, aliquid dolores qui laborum nisi tempore expedita inventore minus dolore nostrum rerum voluptatibus, reiciendis sit fuga modi. Cupiditate porro consequuntur adipisci tempore est perferendis repellat, temporibus esse, explicabo, natus ea. Accusantium aperiam molestiae totam eum accusamus aliquam molestias ipsam doloremque dolore. Illum, eum! Est exercitationem expedita autem placeat labore corporis voluptatibus cumque nam similique repellendus eos ex debitis, fugit dolores eum, nemo ducimus alias iste sequi ab! Dolores blanditiis, quas ut officiis, tempora inventore quam impedit, libero error laborum quasi odio excepturi temporibus vero beatae alias veritatis nobis eligendi consequuntur? Assumenda blanditiis deserunt iusto est dolorem enim consequatur dolores modi facilis. Eos ex ducimus tempora minus est! Vitae eius et, suscipit repudiandae dolorem, consectetur expedita ipsa, laboriosam consequuntur qui earum sunt. Ea assumenda tempore saepe at omnis temporibus minima vel voluptatem, impedit a fuga praesentium minus harum laudantium, suscipit, illo delectus fugit voluptas? Deserunt exercitationem fugiat iure minima distinctio illo! Necessitatibus impedit voluptas sunt vitae commodi voluptatibus iusto odit deleniti id blanditiis corporis dolores tempora enim, nam nisi deserunt quasi in nemo repudiandae fugiat quas adipisci earum quos! Temporibus perferendis natus illo iste harum quos, explicabo aperiam placeat sequi, odit quae? Autem beatae, vero sit ut fugit, minus adipisci aliquid, ducimus repudiandae ex accusamus saepe ab eaque cumque eligendi. Sed ad qui quod. Fuga autem obcaecati at alias perferendis corrupti ratione!
            </p>
        </template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
/* Add your styles here */
.content-style {
  
}

  .background-image {
    /* Set styles for the background image */
    /* You may use CSS properties like background-image, background-size, etc. */
    height: 50rem;
    background-image: url('https://images.unsplash.com/photo-1691486453049-3dca7b30fb5a?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }

  .search-container {
    margin-top: 100px;    
  }
  .content-input {
    width: 50rem;
  }

  .footer {
    /* Add styles for the footer section */
    /* You may want to set background color, padding, etc. */
    margin-top: 50px; /* Adjust as needed */
  } 
</style>