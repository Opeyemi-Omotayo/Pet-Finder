<template>
  <div >
<DogDetails />
<Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import DogDetails from '@/components/dogs/DogDetails.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    DogDetails,
    Footer
      }
}
</script>