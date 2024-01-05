import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import _ from 'lodash';
import axios from 'axios'

export const useIndexStore = defineStore('index', () => {
    // state
    const keyword = ref('')
    const queryParams = ref('')
    const listData = ref([]);  
    const detailData = ref(null)  
    const paramsId = ref(null)
    const isLoading = ref(false)

    // function 
    const getList = (params) => {
        isLoading.value = true
        return new Promise((resolve, reject) => {
            axios.get(`https://exterior-technical-test-api.vercel.app/${queryParams.value}/fts?query=${params}`)
            .then((res) => {
                console.log(res);
                isLoading.value = false
                listData.value = res.data
                resolve(res)
            })
            .catch((err) => {
                isLoading.value = false
                console.log(err);
                listData.value = []
                reject(err)
            })
        })
    }

    const getDetail = (params) => {
        isLoading.value = true
        return new Promise((resolve, reject) => {
            axios.get(`https://exterior-technical-test-api.vercel.app/${queryParams.value}?id=${params}`)
            .then((res) => {
                console.log(res.data);
                isLoading.value = false
                detailData.value = res.data
                resolve(res)
            })
            .catch((err) => {
                isLoading.value = false
                console.log(err);
                detailData.value = null
                reject(err)
            })
        })
    }

    watch(
        keyword,
        _.debounce((value) => {
            console.log(value);
            let length = value.length;
            if (length >= 3 || length == 0) {
                keyword.value = value;
                getList(keyword.value);
            }
        }, 500)
    );

    return {
        keyword,
        queryParams,
        detailData,
        listData,        
        isLoading,
        paramsId,
        getList,
        getDetail
    }
})