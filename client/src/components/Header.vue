<template>
<div class="header">
  <h1 class="title is-1 has-text-centered" style="margin:15px 0px 0px 0px">
    <strong>Fitness Tracker</strong>
  </h1>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="home.html">
        <img src="../assets/logo.png" alt="Logo" style="width:130px;height:50px">
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
        :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
      <div class="navbar-start" style="font-size:20px;">

        <a class="navbar-item" href="/">
          Home
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/Exercise">
            Activity Feed
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="/Exercise">
              Personal Activity
            </a>
            <a class="navbar-item" href="/Exercise">
              Community Activity
            </a>
            <a class="navbar-item" href="addexercise.html">
              Add Activity
            </a>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/Friends">
            Friends
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="/Friends">
              Friend List
            </a>
            <a class="navbar-item" href="/Friends">
              Add Friend
            </a>
          </div>
        </div>
        <a class="navbar-item" href="/Profile">
          Profile
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-success" href="signup.html">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="login.html">
              <strong>Log In</strong>
            </a>
          </div>
        </div>
      </div>

    </div>
  </nav>
  </div>


</template>