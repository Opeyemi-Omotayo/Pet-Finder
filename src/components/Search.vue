<template>
  <div class="search-form container">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Enter a breed..."
      class="search-input"
    />
    <button class="search-button" @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      const breedName = this.searchTerm.toLowerCase();
      fetch(`https://dog.ceo/api/breed/${breedName}/images`)
        .then((response) => {
         if (!response.ok) {
             throw new Error("Breed not found");
          }
             return response.json();
         })
        .then((data) => {
             this.$emit("search-results", { searchTerm: this.searchTerm, data: data.message });
        })
        .catch((error) => {
          this.$emit("search-results", { error: true });
        });
        
    },
  },
};
</script>

<style>
.search-form {
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #363636;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  transition: ease-in all 0.5s;
}

.search-button:hover {
  background: #fdc001;
  color: #fff;
}
@media (min-width: 1343px) {
  .search-form{
    margin-left: 3rem;
  }
  .search-input,
  .search-button {
    font-size: 18px;
    padding: 18px 24px;
  }
}

@media (min-width: 1200px) and (max-width: 1342px) {
  .search-input,
  .search-button {
    font-size: 18px;
    padding: 15px 24px;
  }
  .search-form{
    margin-left: 3rem;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .search-form{
    margin-left: 3rem;
  }

  .search-input,
  .search-button {
    font-size: 18px;
    padding: 12px 24px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .search-input,
  .search-button {
    padding: 8px 16px;
  }
  .search-form{
    margin-left: 3rem;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .search-form {
    flex-direction: column;
    margin-left: 3rem;
  }

  .search-button {
    margin-left: 0;
    margin-top: 10px;
  }
}

@media (max-width: 575px) {
  .search-form {
    flex-direction: column;
    margin-left: 2rem;
  }

  .search-button {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
