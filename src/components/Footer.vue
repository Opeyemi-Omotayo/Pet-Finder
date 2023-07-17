<template>
      <footer class="footer">
      <FooterNavLinks />
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
import FooterNavLinks from './footer/FooterNavLinks.vue'

export default {
    name: "Footer",
    components: {
      FooterNavLinks
    }

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

@media (max-width: 576px) {
  .footer__nav {
    flex-direction: column;
    align-items: center;
  }

  .footer__item {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
@media (min-width: 576px) and (max-width: 991px) {
  .footer__nav {
    justify-content: space-between;
  }

  .footer__item {
    margin-right: 0;
    margin-bottom: 0;
  }
}

@media (min-width: 992px) {
  .footer__nav {
    justify-content: center;
  }

  .footer__item {
    margin-right: 2rem;
    margin-bottom: 0;
  }
  }
</style>