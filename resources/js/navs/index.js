import {ref} from "vue";

export const navs = ref([
    {
        id: 1,
        to: '/',
        name: 'Главная страница',
        active: true
    },
    {
        id: 2,
        to: '/news',
        name: 'Каталог статей',
        active: false
    }
])
