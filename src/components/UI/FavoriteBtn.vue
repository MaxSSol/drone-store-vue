<template>
  <button
      class="favorite-btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "FavoriteBtn"
}
</script>

<style scoped>
.favorite-btn {
  cursor: pointer;
  border: none;
  background: transparent;
  margin-left: 20px;
}
</style>