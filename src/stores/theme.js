import { defineStore } from 'pinia'

const STORAGE_KEY = 'wrz_theme_v1'

export const useThemeStore = defineStore('theme', {
  state: () => ({

    theme: document.documentElement.getAttribute('data-theme') || 'light',
  }),
  actions: {
    toggle() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', this.theme)
      try {
        localStorage.setItem(STORAGE_KEY, this.theme)
      } catch {
      }
    },
  },
})
