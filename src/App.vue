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
  -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}
.col-1{
 -ms-flex: 0 0 25%;
    flex: 0 0 25%;
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

@media (max-width: 576px) {
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

  .site-navbar {
    flex-direction: column;
    align-items: center;
  }

  .site-navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .site-navbar ul li {
    margin-bottom: 10px;
  }
  .site-navbar ul li a{
    display: none;
  }

  .site-navbar ul li:last-child {
    margin-bottom: 0;
  }

  .nav-toggler {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 16rem;
    margin-top: -5rem;
    width: 30px;
    height: 22px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .nav-toggler span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fdc001;
    transition: all 0.2s;
  }

  .nav-active .nav-toggler span:first-child {
    transform: rotate(45deg) translate(4px, 4px);
  }

  .nav-active .nav-toggler span:nth-child(2) {
    opacity: 0;
  }

  .nav-active .nav-toggler span:last-child {
    transform: rotate(-45deg) translate(4px, -4px);
  }
  .nav-active ul {
    display: block;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
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

  .site-navbar {
    flex-direction: column;
    align-items: center;
  }

  .site-navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .site-navbar ul li {
    margin-bottom: 10px;
  }
  .site-navbar ul li a{
    display: none;
  }

  .site-navbar ul li:last-child {
    margin-bottom: 0;
  }

  .nav-toggler {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: -18.5rem;
    margin-top: -5rem;
    width: 30px;
    height: 22px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .nav-toggler span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fdc001;
    transition: all 0.2s;
  }

  .nav-active .nav-toggler span:first-child {
    transform: rotate(45deg) translate(4px, 4px);
  }

  .nav-active .nav-toggler span:nth-child(2) {
    opacity: 0;
  }

  .nav-active .nav-toggler span:last-child {
    transform: rotate(-45deg) translate(4px, -4px);
  }
  .nav-active ul {
    display: block;
  }
}
</style>
