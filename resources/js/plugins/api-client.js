import init from '@/api/client'

const injectionKey = Symbol('apiClient')

export const { client: apiClient } = init()

export default {
    install: (app) => {
        app.config.globalProperties.$apiClient = apiClient
        app.provide(injectionKey.toString(), apiClient)
    }
}
