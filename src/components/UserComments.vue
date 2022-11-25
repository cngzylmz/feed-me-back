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
import RollingRock from '../components/RollingRock.vue';
import AddComment from '../components/AddComment.vue';
import CommentCard from '../components/CommentCard.vue';
import axios from 'axios';

export default {
  name: 'UserComponent',
  components: {
    RollingRock,
    AddComment,
    CommentCard,
  },
  props: {
    userName: {
      type: String,
      default: 'Cengiz',
    },
  },
  data() {
    return {
      comments: [],
      loading: false,
      isDisplay: true,
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
      await axios
        .post(this.baseURI + 'save', data)
        .then(() => {
          setTimeout(() => {
            this.isDisplay = true;
          }, 2000);
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {},

  created() {
    this.getUserCommentsa;
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
