import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  
  function increment() {
    count.value++
  }

  const decrement = () => {
    if (count.value > 0) count.value--
  }

  return { count, increment, decrement }
})
