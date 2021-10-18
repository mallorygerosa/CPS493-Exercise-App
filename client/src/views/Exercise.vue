<template>
<div class="exercise">
    <h1 class="subtitle is-2 has-text-centered">Recent Activity</h1>
  <div class="container">
    <router-link to="/AddExercise" class="button is-success">
      Add New Activity</router-link>
    <div class="card">
      <div class="card-content">
        <article class="post">
          <div class="media">
            <div class="media-left">
              <p class="image is-64x64">
                <img class="is-rounded" src="http://bulma.io/images/placeholders/64x64.png">
              </p>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="title is-5">
                  Name
                  <span class="tag is-white ">Username</span>
                </p>
              </div>
              <p class="subtitle is-5">Type, description, and duration of activity</p>
            </div>
            <div class="media-right has-text-right">
              <span class="has-text-grey-light has-text-right">Date</span>
              <br><br>
              <a id="launch_modal">Edit activity</a>
            </div>
          </div>
          <hr />
        </article>

        <article class="post">
          <div class="media">
            <div class="media-left">
              <p class="image is-64x64">
                <img class="is-rounded" src="http://bulma.io/images/placeholders/64x64.png">
              </p>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="title is-5">
                  Name
                  <span class="tag is-white ">Username</span>
                </p>
              </div>
              <p class="subtitle is-5">Type, description, and duration of activity</p>
            </div>
            <div class="media-right has-text-right">
              <span class="has-text-grey-light has-text-right">Date</span>
              <br><br>
              <a id="launch_modal">Edit activity</a>
            </div>
          </div>
        </article>

      </div>
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'Exercise',
  components: {
    
  }
}
</script>
