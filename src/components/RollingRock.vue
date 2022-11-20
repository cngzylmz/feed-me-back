<template>
  <div class="img-container">
    <img src="../assets/loading.webp" alt="" />
  </div>
</template>
<script>
export default {
  name: 'RollingRock',
  props: {
    isShow: Boolean,
  },
};
</script>
<style scoped>
.img-container {
    padding-top: 50px;
  margin: auto;
  text-align: center;
  height: 50vh;
}
</style>
