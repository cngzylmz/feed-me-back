<template>
  <a-list
    class="demo-loadmore-list"
    :loading="initLoading"
    item-layout="horizontal"
    :data-source="comment"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a key="list-loadmore-edit">.</a>
        </template>
        <a-skeleton avatar :title="false" :loading="false" active>
          <a-list-item-meta
            :description="item"
          >
            <template #avatar>
              <a-avatar />
            </template>
            
          </a-list-item-meta>
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
  
</template>
<script>
export default {
  props: { comment: Array },
};
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
