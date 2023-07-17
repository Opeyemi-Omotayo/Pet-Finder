<template>
  <Banner />
  <Dog />
  <Footer />
</template>

<script>
import Banner from './Banner.vue'
import Dog from './dogs/Dog.vue'
import Footer from './Footer.vue'


export default {
  components: { Banner, Dog, Footer},
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
