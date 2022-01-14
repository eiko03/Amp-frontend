<template>
  <div>
      <div v-if="!$auth.isAuthenticated">
        <div class="d-flex align-center justify-center" style="height: 100vh;">
        <v-card class="shrink rounded-lg pa-10" style="width: 30%; text-align: center; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
          <h1>Login</h1>
        <form onsubmit="return false" class="d-flex flex-column align-center shrink" style="width: 100%;">
          <input v-model="form.email" type="email" placeholder="Email" class="form-control mt-8 lreg-input" />
          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            class="form-control mt-8 lreg-input"
          />
          <button type="submit" @click="login" class="button-submit mt-8">Log Me In</button>
          <nuxt-link to="/register" class="mt-10 mb-3" style="text-decoration: none; color: gray">Need an account? <span style="text-decoration: underline; color: #232323">Register</span></nuxt-link>
        </form>


        </v-card>
        </div>
      </div>

      <div v-else>
        <v-container>
        <v-row>
          <v-spacer>
          </v-spacer>
          <v-column>
            You're logged in as {{ $auth.email }}.
          </v-column>
          <v-spacer>
          </v-spacer>
        </v-row>
        <v-row>
          <v-spacer>
          </v-spacer>
          <v-column>
            <button
              @click="$store.dispatch('auth/logout')"
              class="button--green"
            >Logout</button>
          </v-column>
          <v-spacer>
          </v-spacer>
        </v-row>
        </v-container>
        You're logged in as {{ $auth.email }}.

      </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async login() {
      try {
        console.log("?")
        await this.$store.dispatch('auth/login', this.form)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })

      }
    }
  }
}
</script>
<style>
  *{box-sizing:border-box;}
  .lreg-input {
    padding: 10px 20px;
    border: 1.5px solid lightgray;
    border-radius: 15px;
    width: 100%;
  }

  .button-submit {
    padding: 10px 20px;
    background-color: #4285F4;
    color: white;
    border-radius: 15px;
    width: 100%;
  }

</style>
