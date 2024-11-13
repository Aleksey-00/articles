import { apiClient } from '@/plugins/api-client'
import {API_GET_PARTIAL_ARTICLES} from "@/api/data/api.js";

export function getPartialArticlesData (perPage = 10, page = 1) {
    return apiClient.get(API_GET_PARTIAL_ARTICLES, {
        params: {
            count_per_page: perPage,
            page
        }
    })
}
