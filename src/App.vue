<template>
  <HeaderCommon @click.prevent="headerClick" />
  <MenuTop></MenuTop>
  <LoadingRock :isShow="provide.userName === ''" />
  <UserComments v-if="provide.userName !== ''" :key="key"></UserComments>
</template>

<script>
import HeaderCommon from './components/Header.vue';
import LoadingRock from './components/LoadingRock.vue';
import MenuTop from './components/MenuTop';
import UserComments from './components/UserComments.vue';

export default {
  name: 'App',
  components: {
    HeaderCommon,
    LoadingRock,
    MenuTop,
    UserComments,
  },

  data() {
    return {
      dbLoading: false,
      provide: {
        userName: '',
      },
      key: Number,
    };
  },

  provide() {
    return {
      getUserComments: this.getUserComments,
      provide: this.provide,
    };
  },

  methods: {
    headerClick() {
      this.provide.userName = '';
      this.playSounds();
    },
    getUserComments(name) {
      this.provide.userName = name;
      this.key++;
    },
    playSounds() {
      var audio = new Audio(require('@/assets/hit.mp3'));
      audio.play();
    },
  },
  watch: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
