<template>
  <body>
  <h1 class="subtitle is-3 has-text-centered">Add New Activity</h1>
  <div class="card">
        <div class="card-content">
            <div class="content">

          <!-- <div class="field">
            <label class="label">Activity name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Running, swimming, lifting, ect." required>
            </div>
          </div> -->

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
            <textarea class="textarea"
              placeholder="Ran x miles in x time, x reps of x lb bicep curl, etc..."></textarea> </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="MM/DD/YY">
            </div>
          </div>

          <div class="field has-text-centered">
            <div class="control">
              <label class="label">Visibility</label>
              <label class="radio">
                <input type="radio" name="visibility">
                Public
              </label>
              <input type="radio" name="visibility" checked>
              Private
            </div>
          </div>

            <!-- <button class="button is-link" type="submit">Submit</button> -->
          <div class="field is-grouped is-centered">
            <div class="control">
            <button class="button is-success">Submit</button>
            </div>
            <div class="control">

            <a class="button is-light" href="./">Cancel</a>

          </div>
          </div>
        </div>
      </div>

</body>

</template>

<script>
export default {
  name: "AddExercise",
  components: {},
};
</script>

<style>
</style>