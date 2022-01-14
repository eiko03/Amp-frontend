<template>
  <v-container class="fill-height" fluid style="height: 100vh">
    <v-card id="card-element">
    </v-card>
    <v-row class="d-flex align-center justify-center" v-if="isFetched">
      <v-column class="d-flex align-center justify-center">
        <v-card class="d-flex align-center justify-center flex-column rounded-lg pa-8">
          <h1>Subscribe to {{ creator.name }}</h1>
          <h3>$15.99/per month</h3>

          <button class="button-submit rounded-lg mt-8" @click="subscribe">Start My Subscription!</button>
        </v-card>
      </v-column>
    </v-row>
  </v-container>
</template>
<script>

export default {
async fetch() {
  this.creator = await this.$store.dispatch('api/getUser', this.$auth.creatorId)
  this.isFetched = true
},
data() {
  return {
    isFetched: false,
    stripe: null,
  }
},
methods: {
  async subscribe() {

  }
},
  async beforeMount() {
    const stripe = require('stripe')('sk_test_51JqMOUKsLLDrN7jINKvTmcNAHcH5ija99jCYOy4m9EYmjKRdwr1dJdPQdCOtWH47CPoaJU4VwlrmyBjeEQ43VkbV006I09H9I4');

    // const account = await stripe.accounts.create({type: 'express'});

    // console.log(account)
  }
}

</script>
