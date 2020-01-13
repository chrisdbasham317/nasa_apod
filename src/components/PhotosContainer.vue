<template>
  <main class="photo-area">
    <section class="daily-photo">
      <h1>Today's Photo:</h1>
      <h3>{{dailyPhoto.title}}</h3>
      <img v-bind:src="dailyPhoto.hdurl"/>
    </section>
    <section class='monthly-photos'>
      <h1>This Month's Photos:</h1>
      <h3>Scroll Down for more</h3>
      <div>
        <img v-for="image in thisMonthsPhotos" :src="image.hdurl"/>
      </div>
    </section>
  </main>
</template>

<script>
import { getDailyPhoto, getThisMonthsPhotos } from '../apiCalls';
export default {
  name: 'DailyPhoto',
  data() {
    return {
      dailyPhoto: {},
      thisMonthsPhotos: []
    }
  },
  async mounted() {
    const photoData = await getDailyPhoto();
    this.dailyPhoto = photoData;
    console.log(photoData)
    const monthlyPhotos = await getThisMonthsPhotos();
    this.thisMonthsPhotos = monthlyPhotos;
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: flex;
  height: 70vh;
  justify-content: space-around;
  padding: 1vw;
  width: 100vw;
}

section {
  width: 50vw
}

div {
  height: 57vh;
  overflow-y: scroll;
  width: 95%;
}

h1 {
  /* position: fixed; */
}

img {
  width: 40vw;
}
</style>
