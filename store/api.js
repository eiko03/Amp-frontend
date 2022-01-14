import { API } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import * as gqlQueries from '~/src/graphql/queries'
import * as gqlMutations from '~/src/graphql/mutations'

export const state = {
  posts: [],
  post: null
}

export const getters = {
  authMode: (state, getters, rootState) => rootState.auth.isAuthenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY'
}

export const mutations = {
  set(state, {key, value}) {
    state[key] = value;
  }
}

export const actions = {
  async listPosts({ dispatch }, authorId) {
    console.log(authorId);
    const posts = await dispatch('query', { key: 'posts', query: 'listPosts', filter: {authorId:{ eq: authorId } }})
    var postsReturned = []
    for(let i =0; i < posts.length; i++) {
      postsReturned.push(posts[i])
      if(postsReturned[i].file) {
        postsReturned[i].file = await Storage.get(postsReturned[i].fileName);
      } else {
        continue
      }
    }

    console.log(postsReturned)
    return postsReturned
  },

  async getPost({ dispatch }, id) {
    return dispatch('get', { key: 'post', query: 'getPost', id})
  },

  async createPost({ dispatch }, input) {
    return dispatch('mutate', { key: 'post', mutation: 'createPost', input})
  },

  async updatePost({ dispatch }, input) {
    return dispatch('mutate', {
      key: 'post',
      mutation: 'updatePost',
      input
    })
  },

  async deletePost({ dispatch }, id) {
    return dispatch('mutate',{ mutation: 'deletePost', input: { id } })
  },

  async listComments({ dispatch }, postId) {
    const comments = await dispatch('query', { key: 'comments', query: 'listComments', filter: {postId:{ eq: postId } }})
    console.log(comments)

    return comments
  },

  async getComment({ dispatch }, id) {
    return dispatch('get', { key: 'comment', query: 'getComment', id})
  },

  async createComment({ dispatch }, input) {
    return dispatch('mutate', { key: 'comment', mutation: 'createComment', input})
  },

  async updateComment({ dispatch }, input) {
    return dispatch('mutate', {
      key: 'comment',
      mutation: 'updateComment',
      input
    })
  },

  async deletePost({ dispatch }, id) {
    return dispatch('mutate',{ mutation: 'deleteComment', input: { id } })
  },

  async getUser({ dispatch }, id) {
    return dispatch('get', { key: 'user', query: 'getUser', id})
  },

  async likePost({ dispatch }, input) {
    var postId = input.postId
    var userId = input.userId
    var likedPost = input.likedPost
    console.log("The post id is: "+postId)
    console.log("The user id is: "+userId)
    // var likedPost = dispatch('get', { key: 'post', query: 'getPost', postId})/

    const updatedLikes = {
      id: postId,
      // Note that if existingItem.Pairs is always defined this can be simplified to
      // Pairs: [...existingItem.Pairs, [newPairs.number1, newPairs.number2]]
      likes: likedPost.likes ?
          [...likedPost.likes, userId] :
          [userId]
    }

    console.log("The output is: " + JSON.stringify(updatedLikes))

    return dispatch('mutate', { key: 'post', mutation: 'updatePost', input: updatedLikes })
  },

  async unlikePost({ dispatch }, input) {
    var postId = input.postId
    var userId = input.userId
    var likedPost = input.likedPost
    var prevLikes = [...likedPost.likes]
    var likeOut = []

    likeOut = prevLikes.filter(item => item !== userId)

    const updatedLikes = {
      id: postId,
      likes: [...likeOut]
    }

    console.log("New Likes: "+ JSON.stringify(updatedLikes))

    return dispatch('mutate', { key: 'post', mutation: 'updatePost', input: updatedLikes })
  },




  async get({ commit, getters }, { key, query, id }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { id },
      authMode: getters.authMode
    })

    const value = data[query]
    if (key) commit('set', { key, value })
    return value
  },

  async query({ commit, getters }, { key, query, filter }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { filter },
      authMode: getters.authMode
    })

    const value = data[query].items
    if (key) commit('set', { key, value })
    return value
  },

  async mutate({ commit, getters }, { key, mutation, input }) {
    const { data } = await API.graphql({
      query: gqlMutations[mutation],
      variables: { input },
      authMode: getters.authMode
    })

    const value = data[mutation]
    if (key) commit('set', { key, value })
    return value
  }
}
