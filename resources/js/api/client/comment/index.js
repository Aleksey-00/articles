import {apiClient} from "@/plugins/api-client.js";
import {API_SEND_COMMENT} from "@/api/data/api.js";


export function sendComment(data) {
    return apiClient.post(API_SEND_COMMENT, data);
}
