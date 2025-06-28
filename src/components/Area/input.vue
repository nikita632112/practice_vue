<script>
export default {
  methods: {
    inputTown(event) {
      this.$emit('event', event.target.value);
    }
  }
}
</script>

<template>
  <div class="col" style="padding: 0px">
    <div class="input-group">
      <input @input="inputTown" type="text" class="form-control" placeholder="Название города"/>
    </div>
  </div>
</template>