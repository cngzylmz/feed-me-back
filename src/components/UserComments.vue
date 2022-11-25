<template>
  <RollingRock v-if="!isDisplay && !loading" />
  <AddComment v-if="isDisplay" @sendComment="saveComment($event)"></AddComment>
  <CommentCard v-if="isDisplay && !loading" :comment="comments"></CommentCard>
  <div>
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
      const a = await axios
        .get(this.baseURI + 'comments/' + name.toLowerCase())
        .then(() => (this.loading = false));
      this.comments = a.data.comments;
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
