<script>
export default {
    name: "product-item",
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
<template>
    <div class="card text-center card-product">
        <div class="card-product__img">
            <img class="card-img" :src="product.url" alt="" />
        </div>
        <div class="card-body">
            <p>{{ product.contry }}</p>
            <h4 class="card-product__title">{{ product.name }}</h4>
            <p class="card-product__price">{{ product.price }} руб</p>
            <p v-if="product.inCart == false">
                <button type="button" class="btn btn-primary" @click="$emit('add-to-cart', product.id)">Заказать</button>
            </p>
            <p v-if="product.inCart == true">
                <button type="button" class="btn btn-danger" @click="$emit('add-to-cart', product.id)">Отказаться</button>
            </p>
        </div>
    </div>
</template>
<style scoped>
.card-product {
  min-width: 200px;
}
</style>