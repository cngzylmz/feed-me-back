<template>
    <a-result v-if="isShow" title="Öyle vurma ölmem">
    <template #extra>
        <img src="../assets/throw-rock.webp" alt="" />
    </template>
  </a-result>
</template>
<script>
export default {
  name: 'LoadingRock',
  props: {
    isShow: Boolean
  }
}

</script>
<style scoped>
img {
  margin: auto;
  height: 50vh;
}
</style>
