import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { COUNTRIES } from '@/config/countries'
import { useCounterStore } from '@/stores/counter'

export const useActionStore = defineStore('action', () => {
    const counterStore = useCounterStore()
    const tours = ref([
        { id: 1, country: 'Россия', city: 'Сочи', imageUrl: 'https://placeimg.dev/255/255/nature', price: 2500, inCart: false },
        { id: 2, country: 'Франция', city: 'Париж', imageUrl: 'https://placeimg.dev/255/255/nature', price: 35000, inCart: false },
        { id: 3, country: 'Тайланд', city: 'Пхукет', imageUrl: 'https://placeimg.dev/255/255/nature', price: 45000, inCart: false },
        { id: 4, country: 'Франция', city: 'Ницце', imageUrl: 'https://placeimg.dev/255/255/nature', price: 33000, inCart: false },
    ])
    const selectedCountry = ref('0')
    const search = ref('') 
    const cartItems = computed(() => tours.value.filter(t => t.inCart))
    const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.price, 0))

    const countriesCount = computed(() => {
        const count = { '0': tours.value.length }
        COUNTRIES.forEach(country => {
            if (country.id !== '0') {
                count[country.id] = tours.value.filter(t => t.country === country.id).length
            }
        })
        return count
    })
    
    const filteredTours = computed(() => {
        let result = tours.value
        if (selectedCountry.value !== '0') {
            result = result.filter(t => t.country === selectedCountry.value)
        }
        if (search.value) {
            result = result.filter(t => t.city.toLowerCase().includes(search.value.toLowerCase()))
        }
        return result
    })
        

    
    const updateSearch  = (query) => {
        search.value = query.trim()
    }

    const toggleCartStatus = (tourId) => {
        const tour = tours.value.find(t => t.id === tourId)
        if (!tour) {
            console.error('Тур не найден:', tourId)
            return false
        }
        tour.inCart = !tour.inCart
        return true
    }


    const removeFromCart = (tourId) => {
        const tour = tours.value.find(t => t.id === tourId)
        if (tour) tour.inCart = false
        counterStore.decrement()
    }
    
    return { tours, filteredTours, selectedCountry, search, countriesCount, cartItems, totalPrice, toggleCartStatus, updateSearch, removeFromCart }
})