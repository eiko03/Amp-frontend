<template>

<div v-if="!$auth.isAuthenticated">
  <Unauth/>
</div>

<div v-else>
  <v-row class="d-flex grow justify-center" style="height: 100px">
    <Userbar />
  </v-row>
  <v-row>
    <v-column style="width: 35%" class="d-flex shrink justify-end">
      <Sidebar />
    </v-column>


    <v-column style="width: 65%" class="d-flex grow">
      <Video :postList="posts" v-if="isFetched"/>

    </v-column>


  </v-row>
</div>
</template>
<script>
import Unauth from "@/components/Unauth.vue"
import Video from "@/components/Video.vue"
import Sidebar from "@/components/Sidebar.vue"
import Userbar from "@/components/Userbar.vue"
export default {
  async fetch() {
        console.log(this.$auth.id)
        this.posts = await this.$store.dispatch('api/listPosts', this.$auth.creatorId)
        this.isFetched = true

        console.log(this.posts)
  },
  components: {
    Video,
    Unauth,
    Sidebar,
    Userbar
  },
head: {
    title: "Home"
  },
    data() {
      return {
        posts: [],
        selectedItem: 1,
        isFetched: false
      }
    },

}
</script>
<style>
.shadow {
  box-shadow: 0px 0px 26px 4px rgba(0,0,0,0.15) !important;
}
</style>
