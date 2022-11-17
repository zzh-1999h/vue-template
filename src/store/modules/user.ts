import { defineStore } from 'pinia'
import { store } from '../index'

interface UserState {
  // 自定义
}
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: null,
    token: undefined
  }),
  getters: {},
  actions: {}
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}
