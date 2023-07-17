import { createStore } from 'vuex'

export default createStore({
  state: {
    dogs: getCachedData() || [], 
  },
  getters: {},
  mutations: {
    SET_DOGS(state, dogs) {
      state.dogs = dogs;
      cacheData(dogs); 
    },
  },
  actions: {
    fetchDogs({ commit }) {
      const cachedData = getCachedData();
      if (cachedData) {
        commit('SET_DOGS', cachedData); 
      } else {
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
      }
    },
  },
  modules: {},
});

function cacheData(data) {
  localStorage.setItem('dogs', JSON.stringify(data));
}

function getCachedData() {
  const cachedData = localStorage.getItem('dogs');
  return cachedData ? JSON.parse(cachedData) : null;
}
