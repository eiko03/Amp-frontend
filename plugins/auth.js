import Vue from 'vue'

class AuthService {
  constructor(store) {
    this.$store = store
  }

  get isAuthenticated() {
    return this.$store.state.auth.isAuthenticated
  }

  get user() {
    return this.$store.state.auth.user
  }

  get id() {
    if (!this.user) return
    return this.user.username
  }

  get email() {
    if (!this.user) return
    return this.user.attributes.email
  }

  get creatorId() {
    if(!this.user) return
    return this.user.attributes["custom:creator_id"]
  }
}

export default async ({ store }) => {
  const authService = new AuthService(store)
  Vue.prototype.$auth = authService
  Vue.$auth = authService
  await store.dispatch('auth/load')
}
