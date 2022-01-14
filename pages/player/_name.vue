<template>
  <!-- Auth check -->
  <div v-if="$auth.isAuthenticated">

    <div class="player">
        <video controls muted autoPlay>
            <source :src="`https://clout-shopify-production-bucket.s3.us-east-2.amazonaws.com/Clout/Videos/${vidName}.mp4`" type="video/mp4">
        </video>
    </div>

    <v-row class="d-flex justiy-center">
      <v-spacer>
      </v-spacer>
      <v-column class="d-flex align-self-center">
        <div id="img" class="align-self-center"></div>
        <span class="align-self-center"><h1>{{data.name}}</h1>
          <p style="margin-bottom: 0!important;"><span class="grey-span">by</span> {{data.author}} <span class="grey-span">| </span>1054 <span class="grey-span">views |</span> {{data.likes}} <span class="grey-span">likes</span></p>
        </span>
      </v-column>
      <v-spacer>
      </v-spacer>
      <v-column class="align-self-center">
        <v-btn
         icon
         color="pink"
         disabled
         large

        >
         <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-column>
      <v-spacer>
      </v-spacer>
      <!-- <div id="bar"></div> -->
    </v-row>
    <v-row>


    </v-row>

      <!-- <div id="interaction-header">
        <h2>Join the conversation...</h2>
      </div> -->
      <div id="comment-section">

      </div>
    </div>

    <!-- Unauthenticated -->
    <div v-else>
      <Unauth/>
    </div>
</template>
<script>
import Unauth from "@/components/Unauth.vue"
export default {
  components: {
    Unauth
  },
 data() {
      return {
        data: [],


      }
    },
  async created() {
    this.vidName = this.$route.params.name
    const response = await fetch("http://localhost:5000/data/"+this.vidName);
    this.data = await response.json();
  }
}
</script>
<style scoped>
.player {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0 1em 0;

}

video {
  width: 50%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 50px;
}

.info-bar {
  margin: auto;
  width: 50%;
  font-family: "Poppins-Regular";

}

.info-bar h1 {
  margin: 0 auto 0 auto;
  font-size: 25px;
  display: inline;
}

.info-bar p {
  margin-top: 0;
}

#titles {
  display: inline-block;
  width: calc(100% - 4.7em);
  float: right;
}

#img {
  background-image: url('../../assets/profile-photo.jpeg');
  width: 3.7em;
  height: 3.7em;
  background-size: cover;
  background-position: center;
  display: inline-block;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 50px;
  margin-right: 1em;

}

#bar {
  height: 1px;
  background-color: lightgray;
  width: 100%;
  margin: auto;
  margin-top: 0;
}

.grey-span {
  color: gray;
}

#like {
  float: right;
  padding: 10px 40px;
  background-color: #F6803C;
  border: 0;
  color: white;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 50px;
  border-radius: 5px;
  display: inline-block;
  font-size: 20px;
}

#interaction-header {
  width: 50%;
  margin: auto;
}

#interaction-header h2 {
  font-family: "Poppins-Regular";
}

@media only screen and (max-width: 850px) {
  video {
    width: 80%;
  }

  .info-bar {
    width: 80%;
  }


}
</style>
