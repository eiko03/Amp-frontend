// default.vue
<template>
 <div>
   <v-app>
   <NavBar />
   <Alert />

     <v-container fluid>
       <nuxt />
     </v-container>
   </v-app>
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
