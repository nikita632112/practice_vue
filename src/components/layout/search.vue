<script>
export default {
    name: "search",
    props:{
        searchValue:{
            type: String
        }
    }
}
</script>
<template>
    <div class="col" style="padding: 0px">
        <div class="input-group">
        <input :value="searchValue" @input="$emit('update:modelValue', $event.target.value)" id="search" type="text" class="form-control" placeholder="Название города" />
        </div>
    </div>
</template>
