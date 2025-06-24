<script setup>
    import ProductCard from './ProductCard.vue'
    const tours = [
        { id: 1, country: 'Россия', city: 'Сочи', imageUrl: 'https://placeimg.dev/255/255/nature', price: 2500, inCart: false },
        { id: 2, country: 'Франция', city: 'Париж', imageUrl: 'https://placeimg.dev/255/255/nature', price: 35000, inCart: false },
        { id: 3, country: 'Тайланд', city: 'Пхукет', imageUrl: 'https://placeimg.dev/255/255/nature', price: 45000, inCart: true },
        { id: 4, country: 'Франция', city: 'Ницце', imageUrl: 'https://placeimg.dev/255/255/nature', price: 33000, inCart: true },
    ]
</script>

<template>
<!-- Список товаров -->
    <div class="products-area">
        <ProductCard 
        v-for="tour in tours"
        :key="tour.id"
        :country="tour.country"
        :city="tour.city"
        :imageUrl="tour.imageUrl"
        :price="tour.price"
        :inCart="tour.inCart" />  
    </div>
</template>

<style scoped>
    .products-area {
        display: flex;
        gap: 10px;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 10px;
    }
</style>