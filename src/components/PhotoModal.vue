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
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              @click="close"
            >
              Close me!
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
</style>