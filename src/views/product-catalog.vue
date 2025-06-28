<script>
import Filter from '@/components/Filter.vue'
import Area from '@/components/Area/Area.vue'

export default {
  components: {
    Filter, Area
  },
  data() {
    return {
      countryNum: "0"
    }
  },
  methods: {
    countrycheck(data) {
      this.countryNum = data
    }
  }
}
</script>

<template>
  <div class="catalog">
    <div class="row">
      <Filter @countrycheck="countrycheck"/>
      <Area :countryNum="countryNum"/>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 70px;
}
</style>
