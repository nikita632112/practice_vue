<script setup>
import { useActionStore } from '@/stores/ActionStore';
import { useCounterStore } from '@/stores/counter';
const props = defineProps({
  id: Number,
  country: String,
  city: String,
  imageUrl: String,
  price: Number,
  inCart: Boolean
 })
const actionStore = useActionStore()
const counterStore = useCounterStore()
const toggleCartStatus  = () => {
    actionStore.toggleCartStatus(props.id)
    if (actionStore.tours.find(t => t.id === props.id).inCart) counterStore.increment()
    else counterStore.decrement()
}
</script>

<template>
<!-- Карточка товара -->
    <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" :src="imageUrl" :alt="city" />
            </div>
            <div class="card-body">
              <p>{{ country }}</p>
              <h4 class="card-product__title">{{ city }}</h4>
              <p class="card-product__price">{{ price.toLocaleString() }} руб.</p>
              <p>
                <button type="button" 
                :class="['btn', inCart ? 'btn-danger' : 'btn-primary']" 
                @click = "toggleCartStatus(id)">
                    {{ inCart ? 'Отмена' : 'Заказать' }}
                </button></p>
            </div>
    </div>
</template>

<style scoped>  
    .card-product {
        min-width: 200px;
    }
</style>