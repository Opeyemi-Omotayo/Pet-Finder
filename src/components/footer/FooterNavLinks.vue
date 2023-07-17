<template>
  <ul class="footer__nav">
        <li class="footer__item">
         <router-link :to="{name : 'home'}">Home</router-link>
        </li>
        <li class="footer__item">
         <router-link :to="{name : 'about'}">About</router-link>
        </li>
        <li class="footer__item">
          <router-link :to="{name : 'why'}">Why Us</router-link>
        </li>
        <li class="footer__item">
         <router-link :to="{name : 'contact'}">Contact Us</router-link>
        </li>
      </ul>
</template>

<script>
export default {
   name: "FooterNavLinks"
}
</script>

<style>

</style>