<template>
  <body>
  <h1 class="subtitle is-3 has-text-centered">Add New Activity</h1>
  <div class="container">

        <form action class="box">
          <div class="field">
            <label class="label">Activity name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Running, swimming, lifting, ect." required>
            </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="MM/DD/YY">
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <textarea class="textarea"
              placeholder="Ran x miles in x time, x reps of x lb bicep curl, etc..."></textarea> </div>

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
          
          <div class="buttons is-grouped is-centered">
            <button class="button is-success">Submit</button>
            <a href="exercise.html">
            <button class="button is-light">Cancel</button>
            </a>
          </div>
        </form>
      </div>

</body>

</template>

<script>
export default {};
</script>

<style>
</style>