<template>
  <div class="communityfeed">
    <h1 class="title has-text-centered">Community Feed</h1>
    <h2 class="subtitle has-text-centered">
      See what's going on in your community!
    </h2>

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <post-edit :new-post="newPost" @add="add()" />

        <div class="post" v-for="(p, i) in posts" :key="p.src">
          <post :post="p" @remove="remove(p, i)" />
        </div>
      </div>

      <div class="column">
        <post :post="newPost" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import Session from "../services/session";
import { Add, Delete, GetAll } from "../services/posts";
import PostEdit from "../components/Post-edit.vue";

const newPost = () => ({
  user: Session.user,
  user_handle: Session.user.handle,
});

export default {
  components: {
    Post,
    PostEdit,
  },
  data: () => ({
    posts: [],
    newPost: newPost(),
  }),

  async mounted() {
    this.posts = await GetAll(Session.user.handle);
  },

  methods: {
    async remove(post, i) {
      console.log({ post });
      const response = await Delete(post._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },

    async add() {
      const response = await Add(this.newPost);
      console.log({ response });
      if (response) {
        this.posts.unshift(response);
        this.newPost = newPost();
      }
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
</style>