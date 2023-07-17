<template>
  <Banner />
  <Dog />
  <Footer />
</template>

<script>
import Banner from './Banner.vue'
import Dog from './dogs/Dog.vue'
import Footer from './Footer.vue'


export default {
  components: { Banner, Dog, Footer},
  name: "HomeWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media (min-width: 1343px) and (max-width: 1500px) {
    
}

@media (min-width: 1200px) and (max-width: 1342px) {
    
}

@media (min-width: 992px) and (max-width: 1199px) {
    .site-navbar ul li {
        padding-right: 57px;
    }
    .mar_right {
        margin-right: 0;
    }
    .creative .read_more {
        max-width: 185px;
        margin-right: 0;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .site-navbar ul li {
        padding-right: 31px;
    }
    .mar_right {
        margin-right: 0;
    }
    .creative h1 {
        font-size: 56px;
        line-height: 70px;
    }
    .creative p {
        padding: 5px 0 15px 0;
    }
    .creative .read_more {
        max-width: 142px;
        margin-right: 0;
    }
    .titlepage h2 {
        font-size: 37px;
        line-height: 45px;
    }
}

@media (min-width: 576px) and (max-width: 767px) {
    .grid {
        display: grid;
    }
    .order {
        order: -1;
    }
    .mar_right {
        margin-right: 0px;
    }
    .about_img,
    .agency {
        margin-top: 30px;
    }
    .titlepage h2 {
        font-size: 37px;
        line-height: 45px;
    }
    .pro_file span {
        padding-bottom: 30px;
    }
    .d_none {
        display: none !important;
    }
    .agency {
        margin-top: 30px;
    }
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
    /* navbar css for mobile end */
}

@media (max-width: 575px) {
    .logo {
        text-align: left;
    }
    .about_img,
    .agency {
        margin-top: 30px;
    }
    .creative .read_more {
        margin-bottom: 5px;
        margin-right: 0;
    }
    .mar_right {
        margin-right: 0px;
    }
    .titlepage h2 {
        font-size: 37px;
        line-height: 45px;
    }
    .grid {
        display: grid;
    }
    .order {
        order: -1;
    }
    .titlepage h2 {
        line-height: 40px;
        font-size: 28px;
    }
    .d_none {
        display: none !important;
    }
    /* navbar css for mobile start */
    .navbar-area {
        margin-top: -67px;
    }
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
