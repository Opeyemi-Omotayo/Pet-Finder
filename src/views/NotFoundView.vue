<template>
    <div class="not-found ">
      <h1 class="title">404</h1>
      <p class="message">Oops! The page you are looking for does not exist.</p>
      <router-link to="/" class="back-link">Go back to the homepage</router-link>
    </div>
</template>

<script>
  export default {
  name: 'NotFoundView',
  
}
</script>
  
  <style>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9;
  }
  
  .title {
    font-size: 6rem;
    color: #fdc001;
    margin-bottom: 2rem;
  }
  
  .message {
    font-size: 1.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .back-link {
    background-color: #333;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .back-link:hover {
    background-color: #fdc001;
  }

  @media (max-width: 576px) {
  .title {
    font-size: 2rem;
  }
  .not-found{
    width: 380px;
  }

  .message {
    font-size: 1rem;
  }

  .back-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
@media (min-width: 577px) and (max-width: 767px) {
  .title {
    font-size: 5rem;
  }

  .message {
    font-size: 1.3rem;
  }

  .back-link {
    padding: 0.9rem 1.7rem;
    font-size: 1rem;
  }
}
  </style>
  