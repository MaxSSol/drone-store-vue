<template>
  <product :product_id="id"></product>
</template>

<script>
import Product from "@/components/Products/Product";
export default {
  name: "ProductView",
  components: {Product},
  props: {
    id: {
      type: Number,
      require: true
    }
  }
}
</script>

<style scoped>

</style>