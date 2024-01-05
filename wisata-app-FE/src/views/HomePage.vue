<script setup>  
import { onMounted } from 'vue'
import { storeToRefs } from "pinia";
import { useIndexStore } from '@/stores/index'
import Navbar from '@/components/Navbar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const indexStore = useIndexStore()
const { keyword, listData, isLoading, queryParams, paramsId } = storeToRefs(indexStore)
const { getList } = indexStore

onMounted(() => {
  queryParams.value = 'property'
})
 
const searchProperty = (event) => {
  keyword.value = event.target.value
}

const submitSearch = () => {
  getList(keyword.value)
}

const toDetail = (val) => {
  paramsId.value = val.id
  router.push({ name: 'property-detail', params: {
    id: val.id,
    slug: val.slug
  }})
}

</script>

<template>
  <div class="background-image">   
    <!-- Navbar -->              
    <Navbar />
  
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
            <InputText @input="searchProperty($event)" class="content-input" placeholder="Search Property" />
            <Button @click="submitSearch" label="Search" />
        </span>
          
        </div>

      </div>
    </section>
    
  </div>
  <section class="content-style">    
    <div class="" >
      <Card class="" style="border-radius: 3rem; margin-top: -10rem; border-bottom-left-radius: 0; border-bottom-right-radius: 0; height: auto;">
        <template #title>
          <span class="m-4">List Property</span>
        </template>
        <template #content>
          <div v-if="isLoading">
            <div class="border-round border-1 surface-border p-4 surface-card">
                <div class="flex mb-3">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div>
                        <Skeleton width="10rem" class="mb-2"></Skeleton>
                        <Skeleton width="5rem" class="mb-2"></Skeleton>
                        <Skeleton height=".5rem"></Skeleton>
                    </div>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
                <div class="flex justify-content-between mt-3">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>
          </div>
          <div v-else>
            <div v-if="listData.length !== 0">              
              <div class="grid">
                <div v-for="(list, idx) in listData" :key="idx" class="col-12 md:col-4">
                  <Card @click="toDetail(list)" style="width: 25em; height: 10rem;" class="shadow-3">
                      <template #title> {{ list.name }} </template>
                      <template #subtitle> {{ list.name_suffix }} </template>                      
                      <template #content>
                          <span>{{ list.location_type }}</span>
                      </template>
                  </Card>
                </div>                
              </div>                                           
            </div>
            <div v-else class="card flex justify-content-center">
                <Image src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="Image" width="250" />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,85.3C672,53,768,43,864,80C960,117,1056,203,1152,197.3C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </template>                    
      </Card>
    </div>
  </section>
  
  <section class="">
    <div class="" style="margin-top: 20rem;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,165.3C672,171,768,117,864,101.3C960,85,1056,107,1152,96C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      
      <div class=" flex justify-content-center " style="background-color: #0099ff; margin-top: -10px;">
        <h2 class="text-white">created by abdulmajid</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add your styles here */

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