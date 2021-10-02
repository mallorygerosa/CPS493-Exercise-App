<template>
<div id="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

            <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
          <div class="navbar-start">

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Exercise
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Log Activity
                </a>
                <a class="navbar-item">
                  View Activity
                </a>
              </div>
            </div>
                          
            <a class="navbar-item">
                Community
              </a>
  
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Profile</strong>
                </a>
              </div>
            </div>
          </div>
</div>
      </nav>
      </div>
  <router-view/>
</template>

<style lang="scss">
</style>
