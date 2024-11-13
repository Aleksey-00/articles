import { apiClient } from "@/plugins/api-client.js";
import { API_GET_ARTICLE_BY_SLUG } from "@/api/data/api.js";

export function getArticleBySlug(slug) {
    return apiClient.get(API_GET_ARTICLE_BY_SLUG(slug));
}
