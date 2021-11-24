<template>
  <div class="profile">
  <div class="container">
    <br>
    <div class="card">
      <div class="card-content">
        <div class="media">

          <div class="media-content has-text-centered">
            <figure class="image is-128x128 is-inline-block">
              <img class="is-rounded center" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder">
            </figure>
            <p class="title is-3"> {{user.firstName + " " + user.lastName}} </p>
            <p class="subtitle is-4"> {{user.handle}} </p>
            <p class="title is-6"> {{user.email}} </p>
            <p>This is placeholder text for this user's "about me" information</p>
            
            <p class="subtitle is-6 has-text-right">Edit Profile</p>
          </div>
            <p class="subtitle is-4"> Friends </p>

      <div class="card">
        <div class="card-content">
          <div class="columns is-multiline">
            <!-- Column 1 -->
            <div class="column is-one-third">
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
            <div class="column is-one-third">
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
    </div>
    
  </div>

  </div>
</template>

<script>
import Session from "../services/session";

export default {
  data: () => ({
    firstName: this.Session.user.firstName,
    lastName: this.Session.user.lastName,
    handle: this.Session.user.handle,
    pic: this.Session.user.password,
    email: this.Session.user.email,

    password: this.Session.user.password,
    Session,
  }),
}
</script>