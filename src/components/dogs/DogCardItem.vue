<template>
  <div class="card">
    <img v-lazy="displayedImage" :alt="dog.breed" class="card-image" />
    <div class="card-content">
      <h3 class="card-title">{{ displayTitle }}</h3>
      <p class="card-breed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <router-link :to="routerParams">
        <button class="see_more">See More</button>
      </router-link>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    dog: {
      type: Object,
      required: true,
    },
    searchTerm: {
      type: String,
      required: false,
    },
  },
  computed: {
    displayTitle() {
      return this.searchTerm ? this.searchTerm : this.dog.breed;
    },
    displayedImage() {
      return this.searchTerm ? this.dog : this.dog.image;
    },
    routerParams() {
      return this.searchTerm
        ? { name: "DogDetailsview", params: { breed: this.searchTerm } }
        : { name: "DogDetailsview", params: { breed: this.dog.breed } };
    },
  },
};
</script>
  
<style>
</style>
  