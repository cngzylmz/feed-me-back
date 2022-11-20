<template>
  <HeaderCommon @click.prevent="headerClick" />
  <MenuTop @name="getUserComments($event)"></MenuTop>
  <LoadingRock :isShow="userName === ''" />
  <UserComments
    v-if="userName !== ''"
    :userName="userName"
    :key="key"
  ></UserComments>
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
      userName: '',
      key: Number,
    };
  },
  methods: {
    headerClick() {
      this.userName = '';
      this.playSounds();
    },
    getUserComments(name) {
      this.userName = name;
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
