<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="card-content">
      <h2 class="title is-3 has-text-centered">New Post</h2>
      <button class="delete" @click="$emit('remove')"></button>

      <div class="content">
        <div class="field">
          <label class="label">Picture URL</label>
          <div class="control">
            <input
              class="input"
              type="url"
              placeholder="https://Picture.com"
              v-model="post.src"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Picture alternate text</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Alternate text"
              v-model="post.alt"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Activity description"
              v-model="post.caption"
              required
            ></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Tag a friend</label>
                    <div class="control">

          <o-autocomplete
            rounded
            expanded
            v-model="name"
            :data="filteredDataArray"
            placeholder="@user"
            icon="search"
            clearable
            @select="(option) => (selected = option)"
          >
            <template v-slot: empty>No results found</template>
          </o-autocomplete>
                    </div>
        </div>
<!-- tag2 -->
        <div class="field">
          <label class="label">Tag a friend</label>
                <div class="control">

                </div>
        </div>
        <Autocomplete />


        <div class="field">
          <div class="control has-text-centered">
            <label class="radio">
              <input
                type="radio"
                name="question"
                v-model="post.isPublic"
                :value="true"
                required
              />
              Public
            </label>
            <label class="radio">
              <input
                type="radio"
                name="question"
                v-model="post.isPublic"
                :value="false"
                required
              />
              Private
            </label>
          </div>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <button class="button is-link card-footer-item" type="submit">
        Post
      </button>
      <button class="button is-link is-light card-footer-item" type="reset">
        Cancel
      </button>
    </footer>
  </form>
</template>

<script>
// import Session from "../services/session"
import Autocomplete from "./Autocomplete.vue"

export default {
  props: {
    newPost: Object,
  },
  components: {
      Autocomplete
  },
  data() {
    return {
      post: this.newPost,
      data: [],
      currentUser: null,
      name: "",
      selected: null,
    };
  },
  watch: {
    newPost() {
      this.post = this.newPost;
    },
  },
  computed: {
    filteredDataArray() {
    // currentUser=Get(getUserID(Session.user))
      return this.data.filter((option) => {
        //   for (var i=0; i < Session.user.friends.length; i++)
        // if (Session.user.friends[i].handle.toLowercCase().startsWith(option.toLowerCase()))
        //     this.data.push(option)
            
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        )
        
      });
    },
  },
};
</script>

<style>
</style>