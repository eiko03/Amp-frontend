<template>
  <v-card
  v-if="isUserFetched"
  height="100"
  class="d-flex align-center rounded-lg"
  style="width: 65%; position: fixed; z-index: 1000; box-shadow: rgb(0 0 0 / 15%) 0px 0px 50px;"
  >
    <v-row class="d-flex ml-8" no-gutters>

      <v-column class="d-flex align-centers">
        <v-img
        contain
        style="border-radius: 40%; width: 4.5em;"
        :src="creatorPhoto"></v-img>
      </v-column>


      <v-column class="d-flex align-center ml-5">
        <h1 style="font-size: 1.7em">{{ creatorName }}</h1>
      </v-column>

      <v-spacer></v-spacer>

      <v-column class="d-flex align-center justify-space-around mr-8">
        <v-icon class="mr-4" @click="window.location.href = 'twitter.com'" color="blue">mdi-twitter</v-icon>
        <v-icon class="mr-4" color="pink">mdi-instagram</v-icon>
        <v-icon color="blue darken-2">mdi-facebook</v-icon>
      </v-column>

      <v-column class="d-flex align-center mr-8">



      <v-dialog
        v-model="dialog"
        max-width="400"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          color="green"
          style="color: white;"
          depressed
          v-bind="attrs"
          v-on="on"
          >
          <v-icon left>mdi-cash</v-icon>Donate!</v-btn>
        </template>
        <v-card>
          <v-card-title>
          <span class="text-h5">Donate to <b>{{ creator.name }}</b></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-text-field
                  label="Amount"
                   prefix="$"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pt-0">
                <v-textarea
                  label="Your Message"
                  required
                ></v-textarea>
              </v-col>


            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="green"
            style="color: white;"
            depressed
            @click="dialog = false"
          >
            Donate
          </v-btn>
        </v-card-actions>

        </v-card>
      </v-dialog>

      </v-column>

    </v-row>
  </v-card>
</template>
<script>
export default {
  async fetch() {
    this.creator = await this.$store.dispatch('api/getUser', this.$auth.creatorId)
    this.creatorName = this.creator.name
    this.creatorPhoto = this.creator.profilePhoto
    this.isUserFetched = true
  },
  data() {
    return {
      creatorName: "",
      isUserFetched: false,
      dialog: false
    }
  }
}
</script>
