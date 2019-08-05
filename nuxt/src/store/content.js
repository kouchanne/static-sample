import contJson from '~/assets/json/content.json'

export const state = () => ({
  list: [],
  content: {}
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  setContent(state, data) {
    state.content = data
  },
}

export const actions = {
  fetchList({ commit }) {
    const res = contJson
    commit("setList", res)
  },
  fetchContent({ commit }, id) {
    let res = contJson.filter(x => x.id == id)

    commit("setContent", res[0])
  },
  fetchTagList({ commit }, id) {
    let res = contJson.filter(x => {
      return x.tags.some(x => x === id)
    })
    commit("setList", res)
  }
}

export const getters = {
  getList(state) {
    return state.list
  },
  getContent(state) {
    return state.content
  }
}