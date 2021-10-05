<template>  
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

          <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
            <div class="navbar-start">
              <a class="navbar-item" href="Home.vue">
                Home
             </a>
             <a class="navbar-item" href="Exercise.vue">
                Exercise
             </a>         
             <a class="navbar-item">
                Friends
             </a>
             <a class="navbar-item" href="Profile.vue">
                Profile
             </a>
           </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign Up</strong>
                </a>
                <a class="button is-light">
                  <strong>Log In</strong>
                </a>
              </div>
            </div>
          </div>

        </div>
      </nav>
</template>
