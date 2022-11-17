<template>
  <div class="i-header i-border-bottom">
    <h3 class="text-primary text-bold">{{ $name }}</h3>
    <div class="i-return-btn text-primary" @click="returnModal">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $name() {
      return this.$route.name;
    },
  },
  methods: {
    returnModal() {
      this.$router.back();
    },
  },
};
</script>

<style>
.i-header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.i-return-btn {
  position: absolute;
  left: 20px;
  font-size: 1.2rem;
}
</style>