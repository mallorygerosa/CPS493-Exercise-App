<template>
    <div class="friends">
  <h1 class="subtitle is-2 has-text-centered">Friends</h1>
  <div class="container">
    <a href="/AddFriends"> 

    <button class="button is-success">Add Friend</button>
    </a>

    <button class="button is-light">Edit Friend List</button>

    <div class="card">
      <div class="card-content">
        <div class="columns is-multiline">
          <!-- Column 1 -->
          <div class="column is-one-third">
            <article class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4"> Name </p>
                <p class="subtitle is-5"> Username </p>
                <p class="subtitle is-6 has-text-left">
                  <a id="launch_modal">View Profile</a>
                </p>
              </div>
            </article>

            <article class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4"> Name </p>
                <p class="subtitle is-5"> Username </p>
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
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4"> Name </p>
                <p class="subtitle is-5"> Username </p>
                <p class="subtitle is-6 has-text-left">
                  <a id="launch_modal">View Profile</a>
                </p>
              </div>
            </article>
          </div>
          <!-- Column 3 -->
          <div class="column is-one-third">
            <article class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4"> Name </p>
                <p class="subtitle is-5"> Username </p>
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
  <div id="add_friend" class="modal">
    <div class="modal-background"></div>
    <div class="model-content">
      <form action class="box">

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Username">
          </div>
          <button class="button help is-success">Add User</button>
        </div>
        
      </form>
    </div>
  </div>

</div>
</template>
<script>

export default {
  name: 'Friends',
  components: {
    
  }
}
</script>