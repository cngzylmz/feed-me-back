<template>
  <div>
    <CommentCard :comment="c" v-for="(c,i) in comments" :key="i"></CommentCard>
  </div>
</template>

<script>
import { getAll } from '../utilities/connectDB';
import CommentCard from '../components/CommentCard.vue';

export default {
  name: 'UserComponent',
  components: {
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
      isDisplay: true,
    };
  },
  methods: {
    getUserCommentsa() {
      getAll()
        .then((a) => {
          console.log(a);
          this.comments = a.Cengiz;
          this.isDisplay = true;
          return a.Cengiz;
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
  },

  created() {
    this.getUserCommentsa
  },
};
</script>
