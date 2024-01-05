import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import _ from 'lodash';
import axios from 'axios'

export const useIndexStore = defineStore('index', () => {
    // state
    const keyword = ref('')
    const listProperty = ref([]);
    const isLoading = ref(false)

    // function 
    const searchListProperty = (params) => {
        isLoading.value = true
        return new Promise((resolve, reject) => {
            axios.get(`https://exterior-technical-test-api.vercel.app/property/fts?query=${params}`)
            .then((res) => {
                console.log(res);
                isLoading.value = false
                listProperty.value = res.data
            })
            .catch((err) => {
                isLoading.value = false
                console.log(err);
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
                searchListProperty(keyword.value);
            }
        }, 500)
    );

    return {
        keyword,
        listProperty,
        isLoading,
        searchListProperty
    }
})