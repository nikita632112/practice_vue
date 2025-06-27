<template>
    <div class="form-check">
        <input :value="radioChecked" @change="$emit('update:modelValue', $event.target.id)"
        class="form-check-input"
        type="radio"
        name= "country"
        :id= "filter.name"
        :checked="filter.checked"
        />
        <label class="form-check-label" :for="filter.name"> {{ filter.name }} ({{ filter.amount }})</label>
    </div>
</template>

<script>
export default {
    name: "filter-item",
    props: {
        filter: {
            type: Object,
            required: true
        },
        radioChecked: {
            type: String
        }
    }
}
</script>