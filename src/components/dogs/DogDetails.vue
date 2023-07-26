<template>
    <loading :loading="loading" />
  <div>
    <div class="about">
      <div class="container_width">
        <div class="row d_flex grig">
          <div class="col-sub">
            <div class="about_img">
              <figure>
                <img v-lazy="image" :alt="breed" :class="['dog-image',{ grayscale: isGrayscale, sepia: isSepia },]"
                />
              </figure>
            </div>
          </div>
          <div class="col-sub order">
            <div class="titlepage text_align_left">
              <h2>{{ breed }}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                nesciunt numquam beatae perspiciatis maxime libero aliquid iste
                doloremque illo voluptates.
              </p>
              <p>
                Click on the buttons below to add effect to the image
              </p>
              <div class="filters">
                <button @click="applyGrayscale">Grayscale</button>
                <button @click="applySepia">Sepia</button>
                <button @click="resetFilters">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../Loading.vue'

export default {
  name: "DogDetails",
  components: {
    Loading
  },
  data() {
    return {
      image: "",
      loading: true,
      isGrayscale: false,
      isSepia: false,
    };
  },
  created() {
    this.breed = this.$route.params.breed;
    this.fetchImages();
    setTimeout(() => {
      this.loading = false; 
    }, 2000);
  },

  methods: {
    fetchImages() {
      const breedName = this.breed.toLowerCase();
      fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then((response) => response.json())
        .then((data) => {
          this.image = data.message;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
          this.loading = false;
        });
    },
    applyGrayscale() {
      this.isGrayscale = true;
      this.isSepia = false;
    },
    applySepia() {
      this.isSepia = true;
      this.isGrayscale = false;
    },
    resetFilters() {
      this.isGrayscale = false;
      this.isSepia = false;
    },
  },
};
</script>

<style>
.about {
  background: #fdfdfb;
  padding-top: 90px;
  padding-bottom: 90px;
  margin: 3rem;
  height: 400px;
}
.container_width {
  padding: 0 15px;
  margin: 0 auto;
  display: block;
  clear: both;
  width: 100%;
}

.about_img figure {
  margin: 0;
  position: relative;
}

.about_img figure::before {
  position: absolute;
  content: "";
  background: #e0e0e0;
  width: 60%;
  height: 100%;
  left: -30px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.about_img figure img {
  position: relative;
  z-index: 9999;
  padding: 30px 0;
  width: 330px;
  height: 350px;
  margin-top: -2rem;
}

.about .titlepage {
  padding-bottom: 0;
  max-width: 550px;
  width: 100%;
  float: left;
}

.about .titlepage p {
  padding-top: 20px;
}

.about .read_more {
  margin-top: 35px;
}

.about .read_more:hover {
  box-shadow: 0 0 16px 3px #635d5d38;
}

.col-sub {
  position: relative;
  width: 50%;
  height: 100px;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: -4rem;
}
.titlepage {
  padding-bottom: 40px;
}

.titlepage h2 {
  font-size: 45px;
  color: #2d2d2d;
  line-height: 50px;
  font-weight: bold;
  padding: 0;
  display: inline-block;
}

.titlepage p {
  padding-top: 0px;
}
.text_align_left {
  text-align: left;
}
.dog-image.grayscale {
  filter: grayscale(100%);
}

.dog-image.sepia {
  filter: sepia(100%);
}
.filters button {
  padding: 15px;
  background: #2d2d2d;
  color: #ffffff;
  margin: 1rem;
  border: #2d2d2d;
  transition: ease-in all 0.5s;
  border-radius: 15px;
}

.filters button:hover {
  background: #fdc001;
  color: #fff;
}
@media (min-width: 1343px) {
  .about_img figure img {
  padding: 30px 0;
  width: 410px;
  height: 350px;
  margin-top: -2rem;
}
}

@media (min-width: 1200px) and (max-width: 1342px) {
  .about_img figure img {
  padding: 30px 0;
  width: 370px;
  height: 350px;
  margin-top: -2rem;
}
}

@media (min-width: 768px) and (max-width: 991px) {
  .about_img figure::before {
  width: 75%;
  height: 100%;
  left: -30px;
}

}

@media (min-width: 576px) and (max-width: 767px) {
  .order {
        order: -1;
    }

.about {
  margin: 1rem;
  height: 850px;
}
.about .titlepage {
  margin-top: 27rem;
  max-width: 700px;
  float: left;
}
.about_img figure::before {
  width: 95%;
  height: 100%;
  left: -30px;
  top: 0;
  bottom: 0;
}

}

@media (max-width: 576px){
  .order {
        order: -1;
    }

.about {
  margin: 1rem;
  height: 950px;
}
.container_width {
  padding: 0;
  margin: 0;
}
.about .titlepage {
  margin-top: 18rem;
  max-width: 700px;
  float: left;
}
.titlepage p {
line-height: 25px;
}
.about_img figure::before {
  width: 110%;
  height: 100%;
  left: -30px;
  top: 0;
  bottom: 0;
}

.about_img figure img {
  width: 180px;
  height: 200px;
  margin-top: -2rem;
}
.about .read_more {
  margin-top: 10px;
}
}
</style>
