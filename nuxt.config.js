export default {
  head: {

    link: [{ rel:"stylesheet", type:"text/css", href:'https://vjs.zencdn.net/7.11.4/video-js.css' }],
    link: [{ rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
  },
  plugins: [
    { src: '~plugins/amplify.js'},
    { src: '~/plugins/auth'},
    { src: '~/plugins/stripe.js', ssr: false }
  ],
  css: [
    "~layouts/global.css",
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    'nuxt-stripe-module'

  ],
  env: {
    STRIPE_PK: process.env.STRIPE_PK,
  },
  publicRuntimeConfig: {
    stripe: {
      publishableKey: process.env.STRIPE_PK,
    }
  },

}
