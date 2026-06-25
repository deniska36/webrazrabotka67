<script setup>
defineProps({
  size: { type: [Number, String], default: 40 },
  variant: { type: String, default: 'dark' },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="0" y="0" width="200" height="200" rx="40"
      :fill="variant === 'light' ? 'var(--color-paper)' : 'var(--color-ink)'"
    />
    <line
      x1="62" y1="55" x2="62" y2="145"
      :stroke="variant === 'light' ? 'var(--color-ink)' : 'var(--color-signal)'"
      stroke-width="16" stroke-linecap="round"
    />
    <polyline
      points="62,55 110,55 138,78 110,100"
      fill="none"
      :stroke="variant === 'light' ? 'var(--color-ink)' : 'var(--color-signal)'"
      stroke-width="16" stroke-linecap="round" stroke-linejoin="round"
    />
    <polyline
      points="110,100 138,123 110,145 62,145"
      fill="none"
      :stroke="variant === 'light' ? 'var(--color-ink)' : 'var(--color-signal)'"
      stroke-width="16" stroke-linecap="round" stroke-linejoin="round"
    />
  </svg>
</template>
