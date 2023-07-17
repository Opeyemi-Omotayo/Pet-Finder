<template>
  <div class="home">
    <HomeWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeWorld from '@/components/HomeWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HomeWorld
  }
}
</script>
