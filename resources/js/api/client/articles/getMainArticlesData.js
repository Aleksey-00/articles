import { API_GET_MAIN_ARTICLES } from '@/api/data/api'
import { apiClient } from '@/plugins/api-client'

export function getMainArticlesData () {
    return apiClient.get(API_GET_MAIN_ARTICLES)
}
