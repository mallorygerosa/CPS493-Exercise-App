<template>
  <div class="friends">
    <h1 class="subtitle is-2 has-text-centered">Friends</h1>
    <div class="container">
      <router-link to="/AddFriend" class="button is-success" style = "is-centered">
        Add Friend
      </router-link>

      <div class="card">
        <div class="card-content">
          <div class="columns is-multiline">
            <!-- Column 1 -->
            <div class="column is-one-half">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-96x96">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Name</p>
                  <p class="subtitle is-5">Username</p>
                  <p class="subtitle is-6 has-text-left">
                    <a id="launch_modal">View Profile</a>
                  </p>
                </div>
              </article>

              <article class="media">
                <div class="media-left">
                  <figure class="image is-96x96">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Name</p>
                  <p class="subtitle is-5">Username</p>
                  <p class="subtitle is-6 has-text-left">
                    <a id="launch_modal">View Profile</a>
                  </p>
                </div>
              </article>
            </div>

            <!-- Column 2 -->
            <div class="column is-one-half">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-96x96">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Name</p>
                  <p class="subtitle is-5">Username</p>
                  <p class="subtitle is-6 has-text-left">
                    <a id="launch_modal">View Profile</a>
                  </p>
                </div>
              </article>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
import Session from "../services/session";

export default {
  name: {
  },
  data: () => ({
    user: {
      firstName: null,
      lastName: null,
      handle: null,
      emails: [],
      follows: [],
      pic: 'https://bulma.io/images/placeholders/128x128.png',
    },
    Session,
  }),
};
</script>