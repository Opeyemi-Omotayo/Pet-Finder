import { createStore } from 'vuex'

export default createStore({
  state: {
    dogs: [], 
  },
  getters: {
  },
  mutations: {
    SET_DOGS(state, dogs) {
      state.dogs = dogs;
    },
  },
  actions: {
    fetchDogs({ commit }) {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((data) => {
          const breeds = Object.keys(data.message);
          const fetchImages = breeds.map((breed) =>
            fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
              .then((response) => response.json())
              .then((data) => ({
                breed,
                image: data.message,
              }))
          );
          Promise.all(fetchImages).then((dogs) => {
            commit('SET_DOGS', dogs);
          });
        })
        .catch((error) => {
          console.error('Error fetching dogs:', error);
        });
    },
  },
  modules: {
  }
})
