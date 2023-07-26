<template>
   <Search @search-results="updateDogs"/>
   <div class="container">
    <div v-if="searched && error">
      <p>No results found for "{{ searchTerm }}".</p>
    </div>
    <div v-else-if="filteredDogs.length > 0" class="card-lists">
      <h3 class="avail-h1">Available Breeds</h3>
      <DogCard :dogs="filteredDogs" :searchTerm="searchTerm" />
    </div>

    <div v-else>
      <p class="seach-P">You haven't searched for any breed.</p>
      <h3 class="avail-h1">Available Pets</h3>
    <loading :loading="isLoading" />
    <DogCard :dogs="dogs" :searchTerm="searchTerm" />

    </div>
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
      searchTerm: '',
      error: false, 
      searched: false

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
      if (data.error) {
        this.error = true; 
        this.filteredDogs = [];
      } else {
        this.filteredDogs = data.data;
        this.searchTerm = data.searchTerm;
       this.error = false; 
      }
      this.searched = true;
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
.card-lists {
  margin-top: 4rem;
}
@media (min-width: 768px) and (max-width: 991px) {
  .avail-h1{
      text-align: center;
      margin-left: 2rem;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .avail-h1{
      text-align: left;
      margin-left: 18rem;
  }
}

@media (max-width: 575px) {
  .avail-h1{
      text-align: left;
      margin-left: 7rem;
  }
}

</style>