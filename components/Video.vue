<template>
  <div class="container-loc animate__animated animate__fadeIn">
    <v-row class="ma-0 pa-0" style="width: 100%">

    <v-column
    v-if="!isFetched"
    class="vid-con"
    >
      <v-skeleton-loader
        type="image, article, table-tfoot"
      ></v-skeleton-loader>
    </v-column>


    <v-column
    v-if="isFetched"
    v-for="(post, id) in posts"
    class="vid-con pb-2"
    :key="id"
  >


  <v-row class="d-flex flex-column" style="margin: 0!important;" no-gutters>
    <v-img
    contain
    style="border-radius: 8px 8px 0 0"
    :src="post.file"></v-img>
  </v-row>


  <v-row class="flex-column px-7 py-6" no-gutters>

    <v-row class="d-flex flex-column mb-4" no-gutters>
      <v-row class="d-flex align-center" no-gutters>
        <h2 class="text-lg font-semibold">
          {{ post.title }}
        </h2>
        &nbsp
        &nbsp
        <p class="ma-0 grey--text text-caption">{{ convertDate(post.createdAt) }}</p>
      </v-row>


        <v-row class="d-flex ma-0 mt-1 align-center">
          <span class="d-flex align-center"><v-icon>mdi-eye</v-icon>&nbsp 11,672 Views</span>
          <v-spacer></v-spacer>
          <v-btn
              icon
              :color="likeStatus(post.id)"
              id="like"
              @click="like(post.id)"

            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>

          &nbsp
          <h4 class="justify-center">{{ post.likes.length }}</h4>
        </v-row>
    </v-row>

    <!-- <v-row class="d-flex mb-4" style="width: 80%" no-gutters>
      <v-column class="d-flex align-center" style="width: 8%">
        <v-img
        contain
        style="border-radius: 40%; width: 10%;"
        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"></v-img>
      </v-column>

      <v-column class="d-flex align-center ml-2">
        <h3 style="font-size: 1em">Champagne Papi</h3>
      </v-column>
    </v-row> -->



    <v-divider></v-divider>

    <v-row class="d-flex flex-column mt-4" no-gutters>

      <p>{{ post.body }}</p>
      <!-- <small>Created on: {{ convertDate(post.updatedAt) }}</small> -->
    </v-row>
  </v-row>

  <v-row class="d-flex flex-column px-7" no-gutters>
    <v-text-field
      outlined
      dense
      name="input-7-4"
      label="Write a comment..."
      v-model="commentArea"
      append-icon="mdi-send"
      @click:append="addComment(post.id)"
      hide-details
      class="d-flex align-center justify-center mb-2"
    >
    </v-text-field>
    <small>{{ post.comments.length }} comments and counting...</small>



  </v-row>

  <v-row class="ma-0 px-7">
      <v-list-item two-line class="px-0 py-1" v-for="(comment, i) in post.comments" :key="i">
        <v-list-item-avatar>
              <v-img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle class="flex-wrap">{{ comment.name }} - {{ convertDate(comment.createdAt) }}</v-list-item-subtitle>
          <v-list-item-title>{{ comment.body }}</v-list-item-title>
        </v-list-item-content>
        <h4>{{ comment.likes }}</h4>
        &nbsp
        <v-btn v-if="comment.author == $auth.id">
          <v-icon>mdi-alpha-x</v-icon>
        </v-btn>
        <v-icon>mdi-heart</v-icon>
      </v-list-item>

  </v-row>

  </v-column>
  </v-row>
  </div>
</template>
<script>
export default {
    async fetch() {
      this.current = new Date().toISOString();
      this.currId = this.$auth.id
      this.currName = await this.$store.dispatch('api/getUser', this.currId)
      this.currName = this.currName.name
      this.posts = await this.$store.dispatch('api/listPosts', this.$auth.creatorId)

      for(let x=0; x<this.posts.length; x++) {
        var currComments = await this.$store.dispatch('api/listComments',this.posts[x].id)
        this.posts[x].comments = currComments

        for(let i=0; i<this.posts[x].likes.length;i++) {
          if(this.posts[x].likes[i] == this.currId) {
            this.likedPosts.push(this.posts[x].id)
          }
        }
      }


      this.isFetched = true
    },
    props:['postList'],
    data() {
      return {
        currId:"",
        isFetched: false,
        comment: true,
        commentArea: "",
        posts: [],
        likedPosts: []
      }
    },
    methods: {
      async getUserName(id) {
        var retUser = await this.$store.dispatch('api/getUser', id)
        return retUser.name
      },
      convertDate(input) {
        const d = new Date(input)
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return months[d.getMonth()] + ". " + d.getDate() + ", " + d.getFullYear()
      },
      async addComment(post) {
        console.log(this.currName)
        var comment = {
          body: this.commentArea,
          createdAt: this.current,
          name: this.currName,
          authorId: this.currId,
          postId: post
        }
        try {
          var newComment = await this.$store.dispatch('api/createComment', comment)
          for(let i=0; i<this.posts.length;i++) {
            if(this.posts[i].id == post) {
              console.log("Here, trying to add: " + JSON.stringify(comment))
              this.comment = false
              this.posts[i].comments.push(comment)
            }
          }
        } catch(e) {
          console.log(e)
        }
      },
      async like(post) {
        console.log("Here are our posts:")
        console.log(this.likedPosts)
        if(this.likedPosts.includes(post)) {
          console.log("See it")
          var info = {
            postId: post,
            userId: this.currId,
            likedPost: await this.$store.dispatch('api/getPost', post)
          }

          var unlikePost = await this.$store.dispatch('api/unlikePost', info)

          for(let i=0; i<this.posts.length;i++) {
            if(this.posts[i].id == post) {
              this.posts[i].likes = this.posts[i].likes.filter(item => item !== this.currId)
            }
          }

          this.likedPosts = this.likedPosts.filter(item => item !== post)
          console.log("Here are our posts after: ")
          console.log(this.likedPosts)
        } else {
          var info = {
            postId: post,
            userId: this.currId,
            likedPost: await this.$store.dispatch('api/getPost', post)
          }

          var likePost = await this.$store.dispatch('api/likePost', info)

          for(let i=0; i<this.posts.length;i++) {
            if(this.posts[i].id == post) {
              this.posts[i].likes.push(this.currId)
            }
          }

          this.likedPosts.push(post)
        }

      },
      async unlike(post) {
    //Blank

  },
  likeStatus(post) {
    for(let i=0; i<this.likedPosts.length;i++) {
      if(this.likedPosts[i] == post) {
        return "red"
      }
    }
    return "gray"
  }
    }
}
</script>
<style scoped>
.container-loc {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 100%;

}
.vid-con {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  flex-direction: column;
  width: 65%;
  /* max-width: 16rem; */
  margin: auto 2em;
  margin-bottom: 2rem;
  transition: .3s ease-out;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 50px;
  border-radius: 8px 8px;
}

.skel-con {
  display: flex;
  width: 65%;
  /* max-width: 16rem; */
  margin: auto 2em;
  margin-bottom: 2rem;
  transition: .3s ease-out;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 50px;
  border-radius: 8px 8px;
}


.vid {
  height: 15rem;
  width: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 5px 5px 0 0;
}
.movie-info {
  background: #232323;
  color: white;
  width: 100%;
  border-radius: 0 0 5px 5px;

}
.details {
  padding: 16px 20px;
  text-descoration: none;

}

.details h2 {
  font-family: "Poppins-Medium";
  margin-bottom: 0;
}

.details-h2 {
  font-family: "Poppins-Medium";
  margin-bottom: 0;
  font-size: 25px;
  font-weight: normal;
}

.details p {
  font-family: "Poppins-Light";
  margin-top: 0;
}

.details-p {
  font-family: "Poppins-Light";
  margin-top: 0;
}

@media only screen and (max-width: 850px) {
  .vid-con {
    width: 90%;
    max-width: none;
  }

  .vid-con:hover {
    width: 90%;
    max-width: none;

  }


}




</style>
