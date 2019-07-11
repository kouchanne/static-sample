const data = {
  "1": {
    "companyName": "A会社",
    "desc": "てすと",
  },
  "2": {
    "companyName": "B会社",
    "desc": "てすとB"
  }
}


export const state = () => ({
  list: {}
})

export const mutations = {
  setList(state, list) {
    state.list = list
  }
}

export const actions = {
  getList({ commit }) {
    const res = data
    commit("setList", res)
  }
}

export const getters = {
  questionList(state) {
    return state.list
  }
}