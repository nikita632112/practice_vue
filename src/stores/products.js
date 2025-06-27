import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, country: 'Россия', city: 'Сочи', price: 200000, img_url: "https://placeimg.dev/255/255/nature"},
    {id: 2, country: 'Россия', city: 'Москва', price: 200000, img_url: "https://placeimg.dev/255/255/nature"},
    {id: 3, country: 'Франция', city: 'Париж', price: 300000, img_url: "https://placeimg.dev/255/255/nature"},
    {id: 4, country: 'Тайланд', city: 'Бангкок', price: 450000, img_url: "https://placeimg.dev/255/255/nature"},
  ]);

  const productsCountAll = computed(() => products.value.length);

  const countriesCountList = computed(() => {
    const countries = [...new Set(products.value.map(obj => obj["country"]))];
    const list = {};
    countries.forEach((country) => {
      list[country] = products.value.filter(p => p.country === country).length;
    });
    return list;
  });

  const selectedCountry = ref('Все');
  const searchQuery = ref('');

  const sortedProducts = computed(() => {
    return [...products.value].filter(product => product.city.toLowerCase().includes(searchQuery.value.toLowerCase()));
  })
  const sortedAndSearchedProducts = computed(() => {
    return sortedProducts.value.filter(product => product.country === selectedCountry.value || selectedCountry.value === "Все");
  });

  const cartIDs = ref([1,2]);

  const cartAmount = computed(() => cartIDs.value.length);

  function isInCart(product) {
    return cartIDs.value.includes(product.id);
  }

  const productsInCart = computed(() => {
    return [...products.value].filter(product => isInCart(product));
  })

  function removeFromCart(id) {
    cartIDs.value = cartIDs.value.filter(i => i !== id);
  }

  function addToCart(id) {
    cartIDs.value.push(id);
  }

  return { products, productsCountAll, countriesCountList, selectedCountry, searchQuery, sortedAndSearchedProducts, cartIDs, cartAmount, productsInCart, isInCart, removeFromCart, addToCart }
})
