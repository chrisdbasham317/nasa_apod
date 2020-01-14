<template>
  <main class='monthly-photos'>
    <h1>This Month's Photos:</h1>
    <div class="todays-header">
      <h2>Today's Photo:</h2>
    </div> 
    <h3>Scroll Down for more</h3>
    <div class="photo-display">
      <img 
        v-for="(image, index) in thisMonthsPhotos" :src="image.hdurl" :data-index="index" 
        v-bind:class="{todaysImage: image.date === dailyPhoto.date}"
        @click="choosePhoto"
      />
    </div>
    <PhotoModal 
      v-show="showModal"
      v-bind="currentPhoto"
      @close="closeModal"
    />
  </main>
</template>

<script>
import { getDailyPhoto, getThisMonthsPhotos } from '../apiCalls';
import PhotoModal from './PhotoModal';

export default {
  name: 'DailyPhoto',
  components: {
    PhotoModal
  },
  data() {
    return {
      dailyPhoto: {},
      thisMonthsPhotos: [],
      currentPhoto: {},
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    choosePhoto(e) {
      this.currentPhoto = this.thisMonthsPhotos[e.target.dataset.index];
      this.openModal()
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
  background: lightgrey;
  display: flex;
  flex-direction: column;
  height: 88vh;
  padding: 0 1vw;
  width: 100vw;
}

h1, 
h2, 
h3,
.todays-header {
  background: lightblue;
  height: 5vh;
  margin: 0;
}

h2 {
  border: 5px solid blue;
  width: 20vw;
  margin: 0 auto;
}

div {
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 69vh;
  overflow-y: scroll;
  padding: 10px;
  width: 100vw;
}

.photo-display {
  border: 3px solid black;
}

.todaysImage {
  border: 5px solid blue;
}

img {
  border-radius: 5px;
  height: 20vh;
  margin: 5px;
  width: 20vw;
}
</style>
