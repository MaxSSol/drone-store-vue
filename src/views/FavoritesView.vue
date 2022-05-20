<template>
  <div class="favorites">
    <div class="container">
      <h1>Список обраного</h1>
      <favorite-list></favorite-list>
    </div>
  </div>
</template>

<script>
import FavoriteList from "@/components/Favorites/FavoriteList";
export default {
  name: "FavoritesView",
  components: {FavoriteList}
}
</script>

<style scoped>

</style>