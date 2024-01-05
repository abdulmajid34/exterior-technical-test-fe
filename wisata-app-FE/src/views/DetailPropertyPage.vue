<script setup>
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from "pinia";
import { useIndexStore } from '@/stores/index'

const route = useRoute()
const indexStore = useIndexStore()
const { detailData, isLoading, paramsId, queryParams } = storeToRefs(indexStore)
const { getDetail } = indexStore

onMounted(() => {
    queryParams.value = 'property'
    getDetail(route.params.id)
})

</script>

<template>
    <Navbar />
    <div v-for="(item, key) in detailData" :key="key" class="mt-4 mx-3">        
        <Card class="shadow-3 p-4 flex">
            <template #header> 
                <div class="">
                    <Image :src="item.catalog_data.hero_image" alt="Image" width="700" preview />
                </div>               
            </template>
            <template #title> {{ item.name }} </template>
            <template #subtitle> {{ item.location_type }}, {{ item.country_code }} </template>
            <template #content>
                
                <div class="field">
                    <span>Category:</span>
                    <span class="px-2">{{ item.catalog_data.category }}</span>
                </div>
                <div class="field">
                    <span>Rating:</span>
                    <span class="px-2">{{ item.catalog_data.star_rating }}</span>
                </div>                    
                <div class="field">
                    <span>Review: </span>
                    <span class="px-2">{{ item.catalog_data.review_count }}</span>
                </div>                    
                <div class="field">
                    <span>Review Rating: </span>
                    <span class="px-2">{{ item.catalog_data.review_rating }}</span>
                </div>                    
                <div class="field">
                    <span>Address: </span>
                    <span class="px-2">{{ item.catalog_data.address_full }}</span>
                </div>                    
                
            </template>
        </Card>
    </div>
</template>