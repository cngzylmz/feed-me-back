<template>
  <RollingRock v-if="!isDisplay" />
  <AddComment v-if="isDisplay" @sendComment="saveComment($event)"></AddComment>
  <CommentCard v-if="isDisplay" :comment="comments"></CommentCard>
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
      isDisplay: true,
      baseURI: 'https://feed-me-back-server.herokuapp.com/',
    };
  },
  methods: {
    async getByName(name) {
      const a = await axios.get(
        this.baseURI + 'comments/' + name.toLowerCase()
      );
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
