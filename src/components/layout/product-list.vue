<script>
import ListItem from "@/components/layout/components/product-list/list-item.vue";

export default {
    name: "products",
    components: {
        ListItem
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>
<template>
    <div class="products-area">
        
        <list-item v-for="product in products" :key="product.id" :product="product" @add-to-cart="$emit('add-to-cart', $event)"/> <!---Товар опция--->

        <!--<div class="card text-center card-product">
        <div class="card-product__img">
            <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
        </div>
        <div class="card-body">
            <p>Россия</p>
            <h4 class="card-product__title">Сочи</h4>
            <p class="card-product__price">200 000 руб</p>
            <p><button type="button" class="btn btn-primary">Заказать</button></p>
        </div>
        </div>
        <div class="card text-center card-product">
        <div class="card-product__img">
            <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
        </div>
        <div class="card-body">
            <p>Россия</p>
            <h4 class="card-product__title">Сочи</h4>
            <p class="card-product__price">200 000 руб</p>
            <p><button type="button" class="btn btn-primary">Заказать</button></p>
        </div>
        </div>
        <div class="card text-center card-product">
        <div class="card-product__img">
            <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
        </div>
        <div class="card-body">
            <p>Россия</p>
            <h4 class="card-product__title">Сочи</h4>
            <p class="card-product__price">200 000 руб</p>
            <p><button type="button" class="btn btn-primary">Заказать</button></p>
        </div>
        </div>
        <div class="card text-center card-product">
        <div class="card-product__img">
            <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
        </div>
        <div class="card-body">
            <p>Россия</p>
            <h4 class="card-product__title">Сочи</h4>
            <p class="card-product__price">200 000 руб</p>
            <p><button type="button" class="btn btn-primary">Заказать</button></p>
        </div>
        </div>
        <div class="card text-center card-product">
        <div class="card-product__img">
            <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
        </div>
        <div class="card-body">
            <p>Россия</p>
            <h4 class="card-product__title">Сочи</h4>
            <p class="card-product__price">200 000 руб</p>
            <p><button type="button" class="btn btn-danger">Отмена</button></p>
        </div>
        </div>-->
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