import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5af21d69 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _64fea20e = () => interopDefault(import('..\\pages\\newlogin.vue' /* webpackChunkName: "pages/newlogin" */))
const _337d96d3 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _8dbd375a = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _213c026c = () => interopDefault(import('..\\pages\\subscribe.vue' /* webpackChunkName: "pages/subscribe" */))
const _4acf2d7c = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _1c7873e9 = () => interopDefault(import('..\\pages\\player\\_name.vue' /* webpackChunkName: "pages/player/_name" */))
const _dd6b0b5c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _5af21d69,
    name: "login"
  }, {
    path: "/newlogin",
    component: _64fea20e,
    name: "newlogin"
  }, {
    path: "/register",
    component: _337d96d3,
    name: "register"
  }, {
    path: "/settings",
    component: _8dbd375a,
    name: "settings"
  }, {
    path: "/subscribe",
    component: _213c026c,
    name: "subscribe"
  }, {
    path: "/test",
    component: _4acf2d7c,
    name: "test"
  }, {
    path: "/player/:name?",
    component: _1c7873e9,
    name: "player-name"
  }, {
    path: "/",
    component: _dd6b0b5c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
