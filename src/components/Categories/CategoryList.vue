<template>
  <div class="category-list">
    <category-item
      v-for="category in getAllCategories"
      :key="category.category_id"
      :category="category"
    >
    </category-item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import categoryItem from "@/components/Categories/CategoryItem";

export default {
  name: "CategoryList",
  components: {categoryItem},
  computed: mapGetters(['getAllCategories']),
  methods: mapActions(['fetchCategories']),
  mounted() {
    this.fetchCategories();
  }
}
</script>

<style scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}

@media screen and (max-width: 872px) {
  .category-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 590px) {
  .category-list{
    grid-template-columns: 1fr;
  }
}
</style>