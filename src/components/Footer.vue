<template>
      <footer class="footer">
      <ul class="footer__nav">
        <li class="footer__item">
         <router-link to="/">Home</router-link>
        </li>
        <li class="footer__item">
         <router-link to="/">About</router-link>
        </li>
        <li class="footer__item">
          <router-link to="/">Why Us</router-link>
        </li>
        <li class="footer__item">
         <router-link to="/">Contact Us</router-link>
        </li>
      </ul>
      <p class="footer__copyright">
        &copy; Copyright by
        <a
          class="footer__link twitter-link"
          target="_blank"
          href="https://github.com/Opeyemi-Omotayo/Pet-Finder"
          >Opeyemi Omotayo</a
        >
      </p>
    </footer>
</template>

<script>
export default {
    name: "Footer"

}
</script>

<style>
.footer {
  padding: 3rem 2rem;
  background-color: #fdc001;
  margin-top: 4rem;
}

.footer__nav {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}

.footer__item {
  margin-right: 4rem;
}

.footer__item a {
  font-size: 1.2rem;
  color: #030303;
  text-decoration: none;
}

.footer__logo {
  height: 5rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 5rem;
}

.footer__copyright {
  font-size: 0.8rem;
  color: #181717;
  text-align: center;
}

.footer__copyright .footer__link {
  font-size: 0.8rem;
}
</style>