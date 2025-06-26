import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { COUNTRIES } from '@/config/countries';

export const useActionStore = defineStore('action', () => {
    const tours = ref([
        { id: 1, country: 'Россия', city: 'Сочи', imageUrl: 'https://placeimg.dev/255/255/nature', price: 2500, inCart: false },
        { id: 2, country: 'Франция', city: 'Париж', imageUrl: 'https://placeimg.dev/255/255/nature', price: 35000, inCart: false },
        { id: 3, country: 'Тайланд', city: 'Пхукет', imageUrl: 'https://placeimg.dev/255/255/nature', price: 45000, inCart: false },
        { id: 4, country: 'Франция', city: 'Ницце', imageUrl: 'https://placeimg.dev/255/255/nature', price: 33000, inCart: false },
    ])
    const selectedCountry = ref('0')
    const search = ref('') 

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
        

    const updateCountryFilter = (id) => {
        selectedCountry.value = id
    }
    
    const updateSearch  = (query) => {
        search.value = query.trim()
    }

    const toggleCartStatus  = (tourId) => {
        const tour = tours.value.find(t => t.id === tourId)
        if (tour) tour.inCart = !tour.inCart
    }
    
    return { tours, filteredTours, selectedCountry, search, countriesCount, updateCountryFilter, updateSearch, toggleCartStatus }
})