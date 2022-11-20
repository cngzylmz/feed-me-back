<template>
  <div class="textarea">
    <a-textarea
      v-model:value="value"
      placeholder="Vurun abalıya :D"
      :auto-size="{ minRows: 2, maxRows: 5 }"
    />
    <p v-if="alert" style="color: red">Düzgün bişeyler yaz !!!</p>
    <a-button
      style="margin-top: 20px"
      @click.prevent="saveComment()"
      type="primary"
      >Sen de Vur</a-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      alert: false,
    };
  },
  methods: {
    saveComment() {
      this.value.length < 10 ? (this.alert = true) : (this.alert = false);
      if (!this.alert) {
        this.$emit('sendComment', this.value);
        this.value = '';
      }
    },
  },
};
</script>

<style>
.textarea {
  width: 50%;
  margin: auto;
  padding-top: 20px;
  text-align: center;
}
</style>
