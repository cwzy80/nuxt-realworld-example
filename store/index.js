/**
 * 状态管理:nuxt 已集成 vuex，文件夹名为 store 时会自动加载
 */
const cookieParser = process.server ? require('cookieparser') : undefined
// 服务端渲染期间运行的都是同一个实例,为了防止数据冲突，把 state 定义成一个函数，返回数据对象
export const state = () => {
  return {
    user: null,
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}

export const actions = {
  // 一个特殊的 action方法，会在服务端渲染期间自动运行
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {}
    }
    commit('setUser', user)
  },
}
