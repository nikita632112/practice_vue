<script>

</script>

<template>
    <div class="col-xl-3 col-lg-4 col-md-5">
        <div class="p-3">
          <div class="filter-sidebar-header">Страны</div>
          <div class="filter-sidebar-content">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="country"
                id="country-0"
                value="0"
                checked
              />
              <label class="form-check-label" for="country-0"> Все (21) </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="country"
                id="country-1"
                value="1"
              />
              <label class="form-check-label" for="country-1"> Россия (10) </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="country"
                id="country-2"
                value="2"
              />
              <label class="form-check-label" for="country-2"> Франция (5) </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="country"
                id="country-3"
                value="3"
              />
              <label class="form-check-label" for="country-3"> Тайланд (6) </label>
            </div>
          </div>
        </div>
      </div>
</template>

<style>
.filter-sidebar-header {
  background: var(--primary);
  min-height: 40px;
  display: flex;
  align-items: center;
  color: var(--white);
  border-radius: 10px;
  font-size: 15px;
  padding: 0 5px;
}

.filter-sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
}

.products-area {
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
}

.card-product {
  min-width: 200px;
}
</style>