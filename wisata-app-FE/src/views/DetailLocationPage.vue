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
    queryParams.value = 'location'
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
        <Card class="shadow-3 flex">
            <template #title> {{ item.name }} </template>
            <template #subtitle> {{ item.name_suffix }}, {{ item.country_code }} </template>            
        </Card>

        <div class="card shadow-3 mt-4 p-4">
            <div class="grid">
                <div v-for="(list, idx) in item.related_property_list" :key="idx" class="col-12 md:col-4">
                    <Card style="width: 25em">
                        <template #header>
                            <Image width="400" height="300" preview alt="user header" :src="list.catalog_data.hero_image" />
                        </template>
                        <template #title> {{ list.name }} </template>
                        <template #subtitle> {{ list.name_suffix }} </template>
                        <template #content>
                            <div class="field">
                                <span>Category:</span>
                                <span class="px-2">{{ list.catalog_data.category }}</span>
                            </div>
                            <div class="field">
                                <span>Rating:</span>
                                <span class="px-2">{{ list.catalog_data.star_rating }}</span>
                            </div>                    
                            <div class="field">
                                <span>Review: </span>
                                <span class="px-2">{{ list.catalog_data.review_count }}</span>
                            </div>                    
                            <div class="field">
                                <span>Review Rating: </span>
                                <span class="px-2">{{ list.catalog_data.review_rating }}</span>
                            </div>                    
                            <div class="field">
                                <span>Address: </span>
                                <span class="px-2">{{ list.catalog_data.address_full }}</span>
                            </div>          
                        </template>                        
                    </Card>
                </div>                
            </div>     
    </div>
    </div>
</template>