<template>
  <HeaderCommon
    @click.prevent="
      ()=>{
        userName = ''
        playSounds()
      }
    "
  />
  <MenuTop @name="getUserComments($event)"></MenuTop>
  <LoadingRock :isShow="userName === ''" />
  <UserComments v-if="userName === ''" :name="userName"></UserComments>
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
    };
  },
  methods: {
    getUserComments(name) {
      this.userName = name;
    },
    playSounds() {
      var audio = new Audio(require('@/assets/hit.mp3'));
      audio.play();
    },
  },
  mounted(){
    
  },
  
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
