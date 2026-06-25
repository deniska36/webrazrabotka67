<script setup>
import { computed } from 'vue'
import { useThemeStore } from '../../stores/theme'
import IconSun from './IconSun.vue'
import IconMoon from './IconMoon.vue'

const theme = useThemeStore()
const isDark = computed(() => theme.theme === 'dark')
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="isDark ? 'Включить светлую тему' : 'Включить тёмную тему'"
    @click="theme.toggle()"
  >
    <IconSun v-if="isDark" class="theme-toggle__icon" />
    <IconMoon v-else class="theme-toggle__icon" />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--surface-alt);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  flex-shrink: 0;
  transition: background-color 0.15s ease, transform 0.15s ease;
}
.theme-toggle:hover {
  transform: translateY(-1px);
}
.theme-toggle__icon {
  width: 18px;
  height: 18px;
}
</style>
