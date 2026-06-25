import { defineStore } from 'pinia'
import { getServiceById } from '../data/services'

const STORAGE_KEY = 'wrz_cart_v1'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveToStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
  }
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: loadFromStorage(),
    isDrawerOpen: false,
  }),

  getters: {
    lines(state) {
      return state.items
        .map((item) => {
          const service = getServiceById(item.serviceId)
          if (!service) return null
          return { ...item, service }
        })
        .filter(Boolean)
    },
    count(state) {
      return state.items.reduce((sum, i) => sum + i.qty, 0)
    },
    total() {
      return this.lines
        .filter((line) => typeof line.service.basePrice === 'number')
        .reduce((sum, line) => sum + line.service.basePrice * line.qty, 0)
    },
    hasUnpricedLines() {
      return this.lines.some((line) => typeof line.service.basePrice !== 'number')
    },
    hasPricedLines() {
      return this.lines.some((line) => typeof line.service.basePrice === 'number')
    },
    isEmpty() {
      return this.items.length === 0
    },
  },

  actions: {
    add(serviceId) {
      const existing = this.items.find((i) => i.serviceId === serviceId)
      if (existing) {
        existing.qty += 1
      } else {
        this.items.push({ serviceId, qty: 1 })
      }
      this._persist()
    },
    remove(serviceId) {
      this.items = this.items.filter((i) => i.serviceId !== serviceId)
      this._persist()
    },
    setQty(serviceId, qty) {
      const item = this.items.find((i) => i.serviceId === serviceId)
      if (!item) return
      item.qty = Math.max(1, qty)
      this._persist()
    },
    clear() {
      this.items = []
      this._persist()
    },
    openDrawer() {
      this.isDrawerOpen = true
    },
    closeDrawer() {
      this.isDrawerOpen = false
    },
    _persist() {
      saveToStorage(this.items)
    },
  },
})
