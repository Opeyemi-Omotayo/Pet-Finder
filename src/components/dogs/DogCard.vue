<template>
  <div class="card-list">
    <div v-for="dog in dogs" :key="dog.id" class="card">
      <img :src="dog.image" :alt="dog.breed" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">{{ dog.breed }}</h3>
        <p class="card-breed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <router-link :to="{ name: 'DogDetailsview', params: { breed: dog.breed } }">
          <button class="see_more">See More</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogCard",
  props: {
    dogs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 380px;
  width: 350px;
  transition: ease-in all 0.5s;
  transition-duration: 300ms;
  background: #fff;
}
.card:hover {
  transform: translateY(-1px);
  transform: scale(0.97);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.card-content {
  padding: 10px;
}
.card-content a{
  text-decoration: none;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: uppercase;
  text-align: center;
}

.card-breed {
  color: #777;
  text-align: center;
}

.see_more{
    background: #363636;
    max-width: 170px;
    width: 80%;
    transition: ease-in all 0.5s;
    color: #fff;
    padding: 12px;
    display: block;
    text-align: center;
    border-radius: 30px;
    border: #363636;
    margin: 0 auto;
    margin-bottom: 10rem;
}
.see_more:hover {
    background: #fdc001;
    color: #fff;
}

@media (max-width: 767px) {
  .card-list {
    grid-template-columns: 1fr;
  }
}
</style>
