<template>
  <div class="modal-background">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h1>{{$attrs.title}}</h1>
        </slot>
      </header>
      <section class="description">
        <slot name="description">
          <img v-bind:src="$attrs.hdurl"/>
          <p>{{$attrs.explanation}}</p>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              @click="close"
            >
              Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhotoModal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
  .modal-background {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    bottom: 0;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
  }

  .modal {
    align-items: center;
    border: 2px solid lightgrey;
    border-radius: 10px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: center;
    padding: 10px;
    width: 85vw;
  }

  img {
    border-radius: 10px;
    height: 40vh;
    width: 40vw;
  }

  p {
    max-height: 200px;
    margin: 0 auto;
    overflow-y: scroll;
    width: 90%;
  }

  button {
    border-radius: 10px;
    font-size: 1.1rem;
    height: 5vh;
    margin: 3px;
    width: 10vw;
  }
</style>