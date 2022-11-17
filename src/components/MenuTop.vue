<template>
  <a-menu :selectedKeys="current" mode="horizontal">
    <div v-for="(name, i) in names" :key="i">
      <a-menu-item :key="name" @click="change(name)">
        {{ name }}
      </a-menu-item>
    </div>
  </a-menu>
  <div v-if="loading"></div>
</template>
<script>

export default {
  name: 'MenuTop',
  components: {

  },
  data() {
    return {
      names: ['Cengiz', 'Emrecan','Öznur','Abdullah','Cavit','Muhammed'],
      loading: false,
    };
  },

  methods: {
    change(name) {
      this.$emit("name",name)
    },
  },

  computed: {},
};
</script>
