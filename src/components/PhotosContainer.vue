<template>
  <main class='monthly-photos'>
    <h1>This Month's Photos:</h1>
      <h2>Today's Photo:</h2>
    <h3>Scroll Down for more</h3>
    <div class="photo-display">
      <div v-if="isLoading" class="loading-container">
        <img src="https://media.giphy.com/media/FrOlhISiIhAFa/giphy.gif"/>
        <h5>Loading...</h5>
      </div>
      <img 
        v-for="(image, index) in thisMonthsPhotos" :src="image.hdurl" :data-index="index"
        v-bind:class="{todaysImage: image.date === dailyPhoto.date, hover: hover}"
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
      showModal: false,
      isLoading: false,
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
    this.isLoading = true;
    const photoData = await getDailyPhoto();
    this.dailyPhoto = photoData;
    const monthlyPhotos = await getThisMonthsPhotos();
    this.thisMonthsPhotos = monthlyPhotos;
    this.isLoading = false;
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 88vh;
  width: 100vw;
}

h1, 
h2, 
h3,
.todays-header {
  height: 5vh;
  margin: 0;
  width: 100vw;
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
  background: lightgrey;
  border: 3px solid black;
}

.todaysImage {
  border: 5px solid blue;
}

img {
  border-radius: 5px;
  box-shadow: 3px 3px 2px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px 3px rgba(0,0,0,0.75);
  -webkit-box-shadow: 3px 3px 2px 3px rgba(0,0,0,0.75);
  height: 20vh;
  margin: 5px;
  width: 20vw;
}

img:hover {
  cursor: pointer;
  height: 21vh;
  width: 21vw;
}

.loading-container {
  align-items: center;
  color: #000000;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  justify-content: center;
}
</style>
