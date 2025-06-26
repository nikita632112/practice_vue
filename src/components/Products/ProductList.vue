<script setup>
    import ProductCard from './ProductCard.vue'
    import { useActionStore } from '@/stores/ActionStore'
    import { storeToRefs } from 'pinia' 
    
    const { filteredTours } = storeToRefs(useActionStore())
</script>

<template>
<!-- Список товаров -->
    <div class="products-area">
        <ProductCard 
        v-for="tour in filteredTours"
        :key="tour.id"
        :id="tour.id"
        :country="tour.country"
        :city="tour.city"
        :imageUrl="tour.imageUrl"
        :price="tour.price"
        :inCart = "tour.inCart"
        />  
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