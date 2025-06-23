<script setup></script>

<template>
  <div class="catalog">
    <div class="row">
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
      <div class="col-xl-9 col-lg-8 col-md-7 p-3">
        <div class="col" style="padding: 0px">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Название города" />
          </div>
        </div>

        <div class="products-area">
          <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
            </div>
            <div class="card-body">
              <p>Россия</p>
              <h4 class="card-product__title">Сочи</h4>
              <p class="card-product__price">200 000 руб</p>
              <p><button type="button" class="btn btn-primary">Заказать</button></p>
            </div>
          </div>
          <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
            </div>
            <div class="card-body">
              <p>Россия</p>
              <h4 class="card-product__title">Сочи</h4>
              <p class="card-product__price">200 000 руб</p>
              <p><button type="button" class="btn btn-primary">Заказать</button></p>
            </div>
          </div>

          <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
            </div>
            <div class="card-body">
              <p>Россия</p>
              <h4 class="card-product__title">Сочи</h4>
              <p class="card-product__price">200 000 руб</p>
              <p><button type="button" class="btn btn-primary">Заказать</button></p>
            </div>
          </div>
          <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
            </div>
            <div class="card-body">
              <p>Россия</p>
              <h4 class="card-product__title">Сочи</h4>
              <p class="card-product__price">200 000 руб</p>
              <p><button type="button" class="btn btn-primary">Заказать</button></p>
            </div>
          </div>

          <div class="card text-center card-product">
            <div class="card-product__img">
              <img class="card-img" src="https://placeimg.dev/255/255/nature" alt="" />
            </div>
            <div class="card-body">
              <p>Россия</p>
              <h4 class="card-product__title">Сочи</h4>
              <p class="card-product__price">200 000 руб</p>
              <p><button type="button" class="btn btn-danger">Отмена</button></p>
            </div>
          </div>
        </div>
      </div>
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
