import * as types from '../mutation-types'

const state = {
  currentTab: {},
  leftMenus: [],
  barMenus: [],
  menuTabs: []
}

const actions = {
  setCount ({
    // 数字递增
    commit
  }: any) {
    commit(types.SET_COUNT)
  },
  setCurrentTab (
    {
      // 当前tab实例
      commit
    }: any,
    tab: any
  ) {
    commit(types.SET_CURRENT_TAB, tab)
  },
  addMenuTabs (
    {
      // 当前已选tabs列表
      commit
    }: any,
    tab: any
  ) {
    commit(types.ADD_MENU_TABS, tab)
  },
  setLeftMenus (
    {
      // 获取左侧菜单
      commit
    }: any,
    menus: any
  ) {
    commit(types.SET_LEFT_MENUS, menus)
  },
  setBarMenus (
    {
      // 所有菜单
      commit
    }: any,
    menus: any
  ) {
    commit(types.ALL_BAR_MENUS, menus)
  }
}

const mutations = {
  [types.SET_COUNT] (state: any) {
    state.count++
  },
  [types.SET_CURRENT_TAB] (state: any, tab: any) {
    state.currentTab = tab
  },
  [types.ADD_MENU_TABS] (state: any, tab: any) {
    let t = state.menuTabs.find((tempTab: any) => {
      return tempTab.tabName === tab.tabName
    })
    if (!t) {
      state.menuTabs.push(tab)
    }
  },
  [types.CLEAR_MENU_TABS] (state: any) {
    state.menuTabs.splice(1)
  },
  [types.SET_LEFT_MENUS] (state: any, menus: any) {
    state.leftMenus = menus
  },
  [types.ALL_BAR_MENUS] (state: any, menus: any) {
    state.barMenus = menus
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
