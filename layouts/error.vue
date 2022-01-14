<template>
  <div>
    <div v-if="error.statusCode === 404">
      <v-row class="d-flex flex-column justify-center align-center">
        <h1 class="text-h1 mb-5">404</h1>
        <h2 class="text-h3 mb-5">We cant seem to find that</h2>
        <h3 class="text-p mb-10">The page you're looking for doesn't exist or has been moved</h3>
        <button class="button--outline button-normal py-3 px-6 rounded-lg"><NuxtLink to="/" style="text-decoration: none; color: white;">← Back to Home</NuxtLink></button>
      </v-row>
    </div>

    <div v-else>
      <h1>Error {{ error.statusCode }}! Something went wrong</h1>
      <h1>Try to go back to the last page or to refresh</h1>
      <button class="button-submit rounded-lg"><NuxtLink to="/">← Back to Home</NuxtLink></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
