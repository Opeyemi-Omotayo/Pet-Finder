<template>
   <Search @search-results="updateDogs"/>
   <div class="card-list dog-filter">
   <div v-if="filteredDogs.length > 0">
    <div v-for="dog in filteredDogs" :key="dog.id" class="card">
      <img v-lazy="dog" :alt="dog.breed" class="card-image" />
      <h3 class="card-title">{{ dog.breed }}</h3>
        <p class="card-breed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  </div>
  <div v-else>
    <p>No results found.</p>
  </div>
     </div>

  <div class="container">
    <h3 class="avail-h1">Available Pets</h3>
    <loading :loading="isLoading" />
    <DogCard :dogs="dogs" />
  </div>
</template>

<script>
import DogCard from './DogCard.vue'
import Loading from '../Loading.vue'
import Search from '../Search.vue';


export default {
  name: "Dog",
  components: { DogCard, Loading, Search },
  data() {
    return {
      isLoading: true,
      filteredDogs: [],
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
    updateDogs(data) {
      this.filteredDogs = data;
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