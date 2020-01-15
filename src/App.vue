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
*{
  margin: 0;
  padding: 0;
}
#app {
  background-image: url('https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg');
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  width: 100vw;
  height: 100vh;
}

h1 {
  width: 100vw;
  margin: 0;
  padding: 10px;
  text-align: left;
}
</style>
