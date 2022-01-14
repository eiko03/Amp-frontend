<template>

  <div v-if="$route.name == 'subscribe'">
    <ClientOnly>
    <v-app>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    </v-app>
    </ClientOnly>
  </div>


  <div v-else-if="$auth.isAuthenticated">
    <ClientOnly>
    <v-app>
    <NavBar />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    </v-app>
    </ClientOnly>
  </div>

  <div v-else>
    <ClientOnly>
    <v-app>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    </v-app>
    </ClientOnly>
  </div>

</template>
<script>
import NavBar from "@/components/NavBar.vue"

export default {
    components: {
        NavBar
    }
}
</script>

<style>
  html, body {
    margin: 0;
  }

  </style>
