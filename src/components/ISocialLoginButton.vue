<template>
  <a
    href="#"
    class="i-social-login-btn rounded-circle btn"
    :class="[`btn-${$class}`]"
  >
    <font-awesome-icon :icon="$icon" />
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    $icon() {
      const { type } = this;
      return `fa-brands fa-${type}`;
    },
    $class() {
      const { type } = this;

      if (type === "facebook") return "primary";

      if (type === "twitter") return "info";

      if (type === "google") return "danger";

      return "default";
    },
  },
};
</script>

<style>
.i-social-login-btn {
  display: inline-block;
  font-size: 1.5rem !important;
  margin-left: 2rem;
  width: 3rem;
  height: 3rem;
}

.i-social-login-btn:first-child {
  margin-left: 0rem;
}
</style>