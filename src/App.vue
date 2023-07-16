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
                              <li><router-link to="/">Home</router-link></li>
                              <li><router-link to="/">About</router-link></li>
                              <li><router-link to="/">Why Us</router-link></li>
                              <li><router-link to="/">Contact Us</router-link></li>
                           </ul>
                           <button class="nav-toggler">
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
@media (min-width: 992px) and (max-width: 1199px) {
    .site-navbar ul li {
        padding-right: 57px;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .site-navbar ul li {
        padding-right: 31px;
    }
}
@media (min-width: 576px) and (max-width: 767px) {
    /* navbar css for mobile start */
     .nav-toggler {
        display: block;
        position: absolute;
        right: 15px;
        z-index: 99999;
    }
    .site-navbar {
        min-height: 60px;
    }
    .site-navbar ul {
        position: absolute;
        width: 100%;
        left: -15px;
        top: 60px;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        max-height: 0;
        overflow: hidden;
        transition: .3s;
        z-index: 99999;
        box-shadow: 0 0 10px rgb(192, 190, 182);
    }
    .site-navbar ul li {
        width: 100%;
        text-align: left;
        padding-right: 0;
    }
    .site-navbar ul li a {
        padding: 25px 25px 0px 25px;
    }
    .site-navbar ul.open {
        max-height: 100vh;
        padding-bottom: 25px;
        overflow: visible;
    }
}

@media (max-width: 575px) {
    .logo {
        text-align: left;
    }

    /* navbar css for mobile start */
    .nav-toggler {
        display: block;
        position: absolute;
        right: 15px;
        z-index: 99999;
    }
    .navbar-area {
        margin-top: -67px;
    }
    .site-navbar {
        min-height: 60px;
    }
    .site-navbar ul {
        position: absolute;
        width: 100%;
        left: 0px;
        top: 0px;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        max-height: 0;
        overflow: hidden;
        transition: .3s;
        z-index: 99999;
        box-shadow: 0 0 10px rgb(192, 190, 182);
    }
    .site-navbar ul li {
        width: 100%;
        text-align: left;
        padding-right: 0;
    }
    .site-navbar ul li a {
        padding: 25px 25px 0px 25px;
    }
    .site-navbar ul.open {
        max-height: 100vh;
        padding-bottom: 25px;
        overflow: visible;
    }
}

</style>
