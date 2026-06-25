<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost
  tag: { type: String, default: 'button' },
})
</script>

<template>
  <component :is="tag" class="base-btn" :class="`base-btn--${variant}`">
    <slot />
  </component>
</template>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--fs-body);
  padding: 0.7rem 1.4rem;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
  white-space: nowrap;
  text-align: center;
}

.base-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.base-btn--primary {
  background: var(--color-signal);
  color: var(--color-white);
}
.base-btn--primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-raised);
}

.base-btn--secondary {
  background: var(--text-primary);
  color: var(--surface-page);
}
.base-btn--secondary:hover {
  opacity: 0.85;
}

.base-btn--ghost {
  background: transparent;
  border-color: var(--border-color);
  color: var(--text-primary);
}
.base-btn--ghost:hover {
  border-color: var(--color-blueprint);
  color: var(--color-blueprint);
}
</style>
