<template>
  <div class="container">
    <h3 class="avail-h1">Available Pets</h3>
    <DogCard :dogs="dogs" />
  </div>
</template>

<script>
import DogCard from './DogCard.vue'
import { mapActions } from 'vuex';

export default {
  name: "Dog",
  components: { DogCard },
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