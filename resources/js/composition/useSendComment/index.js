import {ref} from "vue";
import {sendComment} from "@/api/client/comment/index.js";


export default function useSendComment() {
    const isSendComment = ref(false)

    async function handleSendComment(data) {
        try {
            isSendComment.value = false
            const result = await sendComment(data)
            if (result?.status === 200) {
                isSendComment.value = true
            }
        } catch (e) {
            isSendComment.value = false
            console.error(e)
        }
    }

    return {
        isSendComment,
        handleSendComment,
    }
}
