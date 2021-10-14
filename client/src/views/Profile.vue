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
            <p class="title is-3"> Name </p>
            <p class="subtitle is-4"> Username </p>
            <p class="title is-6"> Email </p>
            <p>This is placeholder text for this user's "about me" information</p>
            <p class="subtitle is-6 has-text-right">
              <a id="launch_modal">Edit Profile</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="edit_profile" class="modal">
    <div class="modal-background"></div>
    <div class="model-content">
      <form action class="box">

        <div class="field">
          <label class="label">Change Username</label>
          <div class="control">
            <input class="input is-success" type="text" placeholder="Username">
          </div>
          <p class="help is-success">Username is available</p>
        </div>

        <div class="field">
          <label class="label">New Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="********" required>
          </div>
          <p class="help is-danger">Password must have 8 or more characters</p>
        </div>

        <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="********" required>
          </div>
          <p class="help is-danger">Passwords don't match</p>
        </div>

        <!-- <div class="field">
            <label class="label">Edit profile picture</label>
          </div> -->

      </form>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  components: {
    
  }
}
</script>