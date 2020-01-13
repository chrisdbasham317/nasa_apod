<template>
  <main>
    <div class="daily-photo">
      <h1>{{ msg }}</h1>
    </div>
    <div class='monthly-photos'>

    </div>
  </main>
</template>

<script>
import { getDailyPhoto } from '../apiCalls';
export default {
  name: 'DailyPhoto',
  props: {
    msg: String
  },
  async mounted() {
    const photoData = await getDailyPhoto();
    console.log(photoData);
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
