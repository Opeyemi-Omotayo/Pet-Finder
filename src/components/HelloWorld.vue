<template>
  <Banner />
  <Search />
  <Dog />
</template>

<script>
import Banner from './Banner.vue'
import Search from './Search.vue'
import Dog from './dogs/Dog.vue'


export default {
  components: { Banner, Search, Dog },
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
