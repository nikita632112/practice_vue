<script>
import inp from './input.vue'
import Card from './Card.vue'

export default {
  components: {
    inp, Card
  },
  data() {
    return {
      townName: ''
    }
  },
  methods: {
    townFilter(qwe) {
      this.townName = qwe
    }
  },
  props: {
    countryNum: {
      type: Number
    }
  }
}

</script>

<template>
    <div class="col-xl-9 col-lg-8 col-md-7 p-3">
      <inp @event="townFilter" />
        <div class="products-area">
          <Card :town="townName" :countryNum="countryNum"/>
        </div>
      </div>
</template>

<style>
.products-area {
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
}
</style>