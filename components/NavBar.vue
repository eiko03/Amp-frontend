<template>
<v-app-bar
      app
      flat
      color="white"
      v-if="$auth.isAuthenticated && isFetched"

>
   <!-- <v-btn icon @click="$router.push('/')">
       <v-icon>mdi-home-outline</v-icon>
   </v-btn> -->

   <v-spacer></v-spacer>


   <v-spacer></v-spacer>


    <v-btn icon>
        <v-icon>mdi-forum</v-icon>

    </v-btn>

    <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
           color="primary"
           size="45"
           rounded
           v-bind="attrs"
           v-on="on"
         ><img :src="user.profilePhoto">
       </v-avatar>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar rounded>
              <img
                :src="user.profilePhoto"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-h5">Hey, {{ firstPart(user.name) }}!</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-btn
              block
              large
              elevation="0"
            >Settings</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              block
              large
              elevation="0"
            >DMs</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              block
              large
              elevation="0"
              @click="$store.dispatch('auth/logout')"
            ><span style="color: red;">Logout</span></v-btn>

          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>


</v-app-bar>


</template>

<script>
  export default {
    async fetch() {
      this.user = await this.$store.dispatch('api/getUser', this.$auth.id)
      this.isFetched = true
    },
    data: () => ({
      isFetched: false,
      collapseOnScroll: true,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      user: "John",
      firstname: "Jim",
    }),
    methods: {
      firstPart(name) {
        return name.split(" ")[0]
      }
    }
  }
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

.heading-bar {
  font-size: 30px!important;
  font-weight: bold;
  font-family: "Poppins-Regular"!important;
}
.button-back {
  position: absolute;
  left: 5%;

  padding: 12px 32px;
  font-size: 16px;
  font-family: "Poppins-Regular";
  background-color: white;
  outline: none;
  border: none;
  border-radius: 2px;
  font-weight: bold;
}

.button-logout {
  position: absolute;
  right: 5%;

  padding: 12px 32px;
  font-size: 16px;
  font-family: "Poppins-Regular";
  background-color: white;
  outline: none;
  border: none;
  border-radius: 2px;
  font-weight: bold;
}
.navbar {
    display: flex;
    background-color: #121212;
    justify-content: center;
    align-items: center;
    height: 5em;
}
h1{
    color:#F6803C;
    font-family: Poppins-Regular;
}

#profile {
  float: right;

  border-radius: 10px;
  width: 3em;
  height: 3em;
  object-fit: cover;
}


@media only screen and (max-width: 850px) {
  h1 {
    visibility: hidden;

  }
}
</style>
