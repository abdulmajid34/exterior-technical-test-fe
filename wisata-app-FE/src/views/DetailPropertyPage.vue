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
    <div v-else v-for="(item, key) in detailData" :key="key" class="mt-4 mx-3">        
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