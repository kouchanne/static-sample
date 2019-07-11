const jsonData = {
  1: {
    "companyName": "A会社",
    "desc": "てすと",
    "category": "大カテ",
    "subCategory": "中カテ",
    "subSubCategory": "小カテ",
    "tags": ["ほげ", "ふが"]
  },
  2: {
    "companyName": "B会社",
    "desc": "てすとB",
    "category": "大カテ",
    "subCategory": "中カテ",
    "subSubCategory": "小カテ",
    "tags": ["ほげ", "ふが", "てすと"]
  }
}



export const state = () => ({
  list: {},
  content: {}
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  setContent(state, data) {
    state.content = data
  }
}

export const actions = {
  fetchList({ commit }) {
    const res = jsonData
    commit("setList", res)
  },
  fetchContent({ commit }, id) {
    console.log(id)
    const res = jsonData[id]
    commit("setContent", res)
  }
}

export const getters = {
  getAll(state) {
    return state.list
  },
  getContent(state) {
    return state.content
  }
}