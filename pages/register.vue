<template>
  <div class="max-w-md mx-auto" style="overflow: hidden">
    <div>


      <div v-if="!$auth.isAuthenticated">

        <div class="d-flex align-center justify-center" style="height: 100vh;">
        <v-card class="shrink rounded-lg pa-10" style="width: 30%; text-align: center; height: 60vh; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
          <h1>Create Account</h1>
          <form v-if="step === steps.register" @submit.prevent="register" id="register-f" class="d-flex flex-column align-center shrink">
            <input v-model="registerForm.name" type="text" placeholder="John Doe" class="form-control mt-8 lreg-input" />
            <input v-model="registerForm.email" type="email" placeholder="user@example.com" class="form-control mt-8 lreg-input" />
            <input
              v-model="registerForm.password"
              type="password"
              placeholder="●●●●●●●"
              class="form-control mt-8 lreg-input"
            />
            <v-btn color="#4285F4" depressed block type="submit" form="register-f" class="button-submit my-8 white--text rounded-lg">Register</v-btn>
            </form>





              <form v-if="step != steps.register" @submit.prevent="confirm" id="confirm-f" class="d-flex flex-column align-center shrink">
                <input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control mt-8 lreg-input" style="display: none;"/>
                <p class="above-input mt-15">Registration Code</p>
                <input v-model="confirmForm.code" placeholder="●●●●●●" class="form-control lreg-input" />
                <v-btn color="#4285F4" depressed block type="submit" form="confirm-f" class="button-submit mt-8 white--text rounded-lg">Confirm</v-btn>

              </form>

              <nuxt-link to="/login" style="text-decoration: none; color: gray">Already have an account? <span style="text-decoration: underline; color: #232323">Login</span></nuxt-link>





        </v-card>
        </div>


      </div>


      <div v-else>
        You're logged in as {{ $auth.email }}.
        <button
          @click="$store.dispatch('auth/logout')"
          class="button--green"
        >Logout</button>
      </div>
    </div>

  </div>
</template>

<script>
const steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM'
}
export default {
  async fetch() {
    console.log(this.$route.query.creator)
  },
  data: () => ({
    steps: { ...steps },
    step: steps.register,
    registerForm: {
      name: '',
      email: '',
      password: '',
      creator_id: '',
    },
    confirmForm: {
      email: '',
      code: ''
    }
  }),
  methods: {
    async register() {
      try {
        console.log(this.registerForm)
        if(!this.$route.query.creator) {
          return console.log("Damn")
        }
        this.registerForm.creator_id = this.$route.query.creator
        await this.$store.dispatch('auth/register', this.registerForm)
        this.confirmForm.email = this.registerForm.email
        this.step = this.steps.confirm
      } catch (error) {
        console.log({ error })
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
        await this.$store.dispatch('auth/login', this.registerForm)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>
<style>
.container {
  padding: 0!important;
}
</style>
