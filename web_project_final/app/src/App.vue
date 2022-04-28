<template> 
  <div id = app>
    <router-link to="/" class="header">Home</router-link>&

    <router-link to="/students" class="header">Student</router-link>
    <router-view/>
  </div>
</template>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #B6F0ED;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style scoped>
.header{
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 1.875em;
  color: #0DB0B9;
}
</style>
