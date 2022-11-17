<template>
  <router-link
    to="/create-post"
    class="i-create-post-button bg-primary rounded-circle text-white"
  >
    <font-awesome-icon icon="fa-solid fa-plus" />
  </router-link>
</template>

<script>
export default {};
</script>

<style>
.i-create-post-button {
  font-size: 1.5rem;
  position: fixed;
  right: 2rem;
  bottom: 3rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>