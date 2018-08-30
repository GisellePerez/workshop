<template> 
  <div id="app">
      <Gallery></Gallery>
  </div>
</template>

<script>
import Gallery from './components/gallery.vue'

export default {
  name: 'app',
  components: {
    Gallery
  }
}
</script>

<style>  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  } 
</style>
