<template>
  <div class="categories">
    <div class="container">
      <h1>Категорії товарів</h1>
      <category-list></category-list>
    </div>
  </div>
</template>

<script>
import CategoryList from "@/components/Categories/CategoryList";
export default {
  name: "CategoriesView",
  components: {CategoryList}
}
</script>

<style scoped>
.container {
  max-width: 1170px;
  margin: 0 auto;
}

</style>