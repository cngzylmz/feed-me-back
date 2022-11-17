<template>
  <div class="header-container">
    <div class="logo-container">
      <img
        class="logo"
        alt="Insurance logo"
        src="../assets/umbrella-logo.webp"
      />
      <span>INSURANCE</span>
    </div>
    <div class="header-title">
      <h1>İLK TAŞI GÜNAHSIZ OLAN ATSIN</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCommon',

  methods: {
    async playSounds() {
      var audio = new Audio(require('@/assets/hit.mp3'));
      audio.play();
      console.log('gelidim ');
    },
  },

  mounted() {
    this.playSounds();
  },
};
</script>

<style scoped>
.header-container {
  display: inline-flex;
  width: 100%;
}
.logo-container {
  width: 300px;
}
.logo {
  width: 15vh;
}

.header-title {
  width: 100%;
  margin: auto;
  text-align: center;
  align-items: center;
}
h1 {
  margin: 0;
  margin-right: 250px;
}
</style>
