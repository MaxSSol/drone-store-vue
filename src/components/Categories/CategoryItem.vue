<template>
  <div class="category-item">
    <div class="category-item-head">
      <h3>{{ category.title }}</h3>
    </div>
    <div class="category-item-body">
      <router-link
          :to="{name: 'products-category', params: {id: category.category_id}}"
          class="category-link"
      >
        Перейти до категорії
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.category-item {
  border: 1px solid #ececec;
  padding: 15px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.category-item-head {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-link {
  border: 1px solid #ececec;
  padding: 5px;
  text-decoration: none;
  color: #444444;
  transition: .2s linear;
}

.category-link:hover {
  background-color: #000000;
  color: #ffffff;
}

@media screen and (max-width: 590px) {
  .category-link {
    margin: 0 auto;
  }
}
</style>