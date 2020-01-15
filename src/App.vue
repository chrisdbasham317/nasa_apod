<template>
  <div id="app">
    <h1>NASA's Daily Photos</h1>
    <PhotosContainer />
  </div>
</template>

<script>
import PhotosContainer from './components/PhotosContainer.vue'

export default {
  name: 'app',
  components: {
    PhotosContainer
  }
}
</script>

<style>

html {
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}

h1 {
  width: 100vw;
}
</style>
