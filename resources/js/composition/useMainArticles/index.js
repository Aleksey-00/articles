import { ref } from 'vue'
import {getMainArticlesData} from "@/api/client/articles/getMainArticlesData.js";

export function useMainArticles() {
    const loading = ref(false)
    const articles = ref([])
    const isError = ref(false)

    async function fetchMainArticles() {
        try {
            loading.value = true
            isError.value = false
            const result = await getMainArticlesData()
            if (result?.status === 200) {
                articles.value = result.data
            }
            loading.value = false

        } catch (e) {
            loading.value = false
            isError.value = true
            console.error(e)
        }
    }

    return {
        loading,
        articles,
        isError,
        fetchMainArticles
    }
}
