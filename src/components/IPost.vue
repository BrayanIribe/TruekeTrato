<template>
  <div class="i-post shadow rounded">
    <div class="i-post-image" :style="$image"></div>
    <div class="i-post-container p-3">
      <h4>{{ title }}</h4>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "https://via.placeholder.com/500",
    },
    title: {
      type: String,
      default: "Trueque",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed odio tortor. Nullam pellentesque est augue, facilisis tincidunt ex varius et.",
    },
  },
  computed: {
    $image() {
      const { image } = this;
      return { "background-image": `url(${image})` };
    },
  },
};
</script>

<style>
.i-post-image {
  display: block;
  width: 100%;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>