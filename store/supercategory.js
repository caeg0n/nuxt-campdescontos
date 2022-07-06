import axios from 'axios'

export const state = () => ({
  items: [],
})

export const actions = {
  async setAllSuperCategories({ state, commit }) {
    return await axios
      .get(`${this.$axios.defaults.baseURL}/super_categories`)
      .then((res) => {
        const categories = res.data
        commit('setCategories', categories)
      })
  },

  // counterUp({ state, commit }) {
  //   commit('setCounter', state.counter + 1)
  // },

}

export const mutations = {
  setCategories(state, categories) {
    state.items.push(categories)
  },

  // setCounter(state, value) {
  //   state.counter = value
  // },
}

export const getters = {
  // myGetter(state) {
  //   return state.counter + 1000
  // },
}

