<script setup>
const props = defineProps({
  tone: { type: String, default: 'available' },
})

const labels = {
  available: 'Доступно',
  progress: 'В работе',
  done: 'Готово',
}
</script>

<template>
  <span class="status-badge" :class="`status-badge--${tone}`">
    <span class="dot" aria-hidden="true" />
    <slot>{{ labels[props.tone] }}</slot>
  </span>
</template>

<style scoped>
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: var(--fs-micro);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.7rem;
  border-radius: var(--radius-pill);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-badge--available {
  background: var(--color-blueprint-dim);
  color: var(--color-blueprint);
}
.status-badge--available .dot {
  background: var(--color-blueprint);
}

.status-badge--progress {
  background: var(--color-signal-dim);
  color: #b85419;
}
.status-badge--progress .dot {
  background: var(--color-signal);
}

.status-badge--done {
  background: var(--color-success-dim);
  color: var(--color-success);
}
.status-badge--done .dot {
  background: var(--color-success);
}
</style>
