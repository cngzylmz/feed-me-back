<template>
  <div style="background: #ececec; padding: 5px">
    <a-card title="" :bordered="false" style="width: 300px">
      <p>{{ comment }}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'CommentCard',
  props: {
    comment: String,
  },
  components: {},
};
</script>
