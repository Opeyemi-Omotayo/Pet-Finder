<template>
<header class="header-area">
            <div class="container">
               <div class="row d_flex">
                  <div class=" col-1 ">
                     <div class="logo">
                        <router-link to="/">Pet Finder</router-link>
                     </div>
                  </div>
                  <div class="col-2">
                     <div class="navbar-area">
                        <nav class="site-navbar">
                           <ul>
                              <li><router-link :to="{name : 'home'}">Home</router-link></li>
                              <li><router-link :to="{name : 'about'}">About</router-link></li>
                              <li><router-link :to="{name : 'why'}">Why Us</router-link></li>
                              <li><router-link :to="{name : 'contact'}">Contact Us</router-link></li>
                           </ul>
                           <button class="nav-toggler" @click="toggleNav">
                            <span></span>
                          </button>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
  <router-view/>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navActive: false
    };
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
   font-weight: 300;
  color: #444;
  line-height: 1.9;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
      background-color: #f3f3f3;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 100%;
  box-sizing: border-box;
}
.header-area {
    border-top: #fdc001 solid 40px;
    width: 100%;
}
.col-1{
   position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
    max-width: 25%;
}
.col-2{
  text-align: right;
  align-items: right;
}

.logo a {
    color: #363636;
    font-size: 38px;
    font-weight: 400;
    text-decoration: none;
}

.site-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site-navbar ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

.site-navbar ul li a {
    color: #363636;
    font-size: 17px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
}

.site-navbar ul li {
    padding-right: 70px;
}

.site-navbar ul li:last-child {
    padding-right: 0;
}

.site-navbar ul li a:hover {
    color: #fdc001;
}
.site-navbar ul li a.router-link-exact-active {
    color: #fdc001;
}

.nav-toggler {
    border: 3px solid #363636;
    padding: 5px;
    background-color: transparent;
    cursor: pointer;
    height: 39px;
    display: none;
    z-index: 99999;
}

.nav-toggler span,
.nav-toggler span:before,
.nav-toggler span:after {
    width: 28px;
    height: 3px;
    background-color: #363636;
    display: block;
    transition: .3s;
}

.nav-toggler span:before {
    content: '';
    transform: translateY(-9px);
}

.nav-toggler span:after {
    content: '';
    transform: translateY(6px);
}

@media (max-width: 480px) {
  .col-1 {
    flex-basis: 100%;
  }
  .logo a{
    font-size: 28px;
    font-weight: 200;
  }

  .col-2 {
    margin-top: 10px;
  }

  .site-navbar ul li a{
    display: none;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
.col-1 {
    flex-basis: 100%;
  }
  .logo a{
    font-size: 28px;
    font-weight: 200;
  }

  .col-2 {
    margin-top: 10px;
  }

  .site-navbar ul li a{
    display: none;
  }

}
@media (min-width: 768px) and (max-width: 991px) {
  .site-navbar ul li {
    padding-right: 50px;
}
}

@media (min-width: 992px) and (max-width: 1199px) {
  .site-navbar ul li {
    padding-right: 75px;
}
}

@media (min-width: 1200px) and (max-width: 1342px) {
  .site-navbar ul li {
    padding-right: 110px;
}  
}

@media (min-width: 1343px) and (max-width: 1400px){
    .site-navbar ul li{
      padding-right: 130px;
    }
}

@media (min-width: 1401px) and (max-width: 1600px){
    .site-navbar ul li{
      padding-right: 140px;
    }
}

@media (min-width: 1601px){
    .site-navbar ul li{
      padding-right: 180px;
    }
}
</style>
