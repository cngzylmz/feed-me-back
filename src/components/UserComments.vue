<template>
  <RollingRock v-if="!isDisplay && !loading" />
  <AddComment
    v-if="isDisplay && !loading"
    @sendComment="saveComment($event)"
  ></AddComment>
  <CommentCard v-if="isDisplay && !loading" :comment="comments"></CommentCard>
  <div class="img-container">
    <img v-if="loading" src="../assets/falling-rocks.gif" alt="" srcset="" />
  </div>
</template>

<script>
import CommentCard from '../components/CommentCard.vue';
import AddComment from './AddComment.vue';
import RollingRock from './RollingRock.vue';
import axios from 'axios';

export default {
  name: 'UserComponent',
  components: {
    CommentCard,
    AddComment,
    RollingRock,
  },
  props: {
    userName: String,
  },
  data() {
    return {
      comments: [],
      loading: false,
      isDisplay: true,
      baseURI: 'https://feed-me-back-server.herokuapp.com/',
    };
  },
  methods: {
    async getByName(name) {
      this.loading = true;
      await axios
        .get(this.baseURI + 'comments/' + name.toLowerCase())
        .then((res) => {
          this.comments = res.data.comments;
          setTimeout(() => {
            this.loading = false;
          });
        }, 5000);
    },
    async saveComment(comment) {
      this.comments.push(comment);
      const data = {
        name: this.userName.toLocaleLowerCase(),
        comments: this.comments,
      };
      this.isDisplay = false;
      await axios.post(this.baseURI + 'save', data).then(() => {
        setTimeout(() => {
          this.isDisplay = true;
        }, 3000);
      });
    },
  },
  computed: {},

  created() {
    this.getByName(this.userName);
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
