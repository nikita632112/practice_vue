import { defineStore } from 'pinia'
import { COUNTRIES } from '@/config/countries'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [
            { id: 1, country: 'Россия', city: 'Сочи', price: 200000, image: 'https://placeimg.dev/255/255/nature' },
            { id: 2, country: 'Франция', city: 'Париж', price: 350000, image: 'https://placeimg.dev/255/255/arch' },
            { id: 3, country: 'Тайланд', city: 'Пхукет', price: 180000, image: 'https://placeimg.dev/255/255/nature' }
        ],
        selectedCountry: JSON.parse(localStorage.getItem('productFilters'))?.selectedCountry || '0',
        searchQuery: JSON.parse(localStorage.getItem('productFilters'))?.searchQuery || '',
    }),
    getters: {
        filteredProducts(state) {
            return state.products.filter(product => {
                const countryMatch = state.selectedCountry === '0' || 
                                    product.country === this.getCountryName(state.selectedCountry);
                const searchMatch = product.city.toLowerCase()
                                    .includes(state.searchQuery.toLowerCase());
                return countryMatch && searchMatch;
            });
        },
        getCountryName() {
            return (id) => {
                const countries = {
                    '1': 'Россия',
                    '2': 'Франция',
                    '3': 'Тайланд',
                };
                return countries[id] || '';
            };
        },
    
        countriesCount() {
        const counts = {}
        Object.entries(COUNTRIES).forEach(([id, { filter }]) => {
            counts[id] = this.products.filter(filter).length
        })
        return counts
        },  
    },
    actions: {
        saveFiltersToLocalStorage() {
            const filters = {
                selectedCountry: this.selectedCountry,
                searchQuery: this.searchQuery
            }
            localStorage.setItem('productFilters', JSON.stringify(filters))
        },
        setSelectedCountry(countryId) {
            this.selectedCountry = countryId;
            this.saveFiltersToLocalStorage()
        },
        setSearchQuery(query) {
            this.searchQuery = query;
        },
    },
})