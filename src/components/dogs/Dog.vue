<template>
  <div class="container">
    <h3 class="avail-h1">Available Pets</h3>
    <loading :loading="isLoading" />
    <DogCard :dogs="dogs" />
  </div>
</template>

<script>
import DogCard from './DogCard.vue'
import Loading from '../Loading.vue'


export default {
  name: "Dog",
  components: { DogCard, Loading },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    dogs() {
      return this.$store.state.dogs;
    },
  },
  methods: {
    fetchDogs() {
      this.$store.dispatch('fetchDogs');
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; 
    }, 1500);
    this.fetchDogs(); 
  },
};
</script>

<style scoped>
.avail-h1{
  text-align: center;
  margin: 5rem;
}
</style>