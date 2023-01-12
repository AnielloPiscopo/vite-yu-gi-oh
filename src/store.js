import { reactive } from 'vue'

export const store = reactive({
    cardsList: [],
    numOfCards: 10,
    offsetNum: 0,
})