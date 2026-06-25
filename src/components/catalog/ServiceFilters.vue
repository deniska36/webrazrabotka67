<script setup>
import { categories } from '../../data/services'

const props = defineProps({
  modelValue: { type: String, default: 'all' },
})
const emit = defineEmits(['update:modelValue'])

const options = [{ id: 'all', title: 'Все услуги' }, ...categories]
</script>

<template>
  <div class="filters" role="tablist" aria-label="Фильтр по категориям услуг">
    <button
      v-for="opt in options"
      :key="opt.id"
      role="tab"
      :aria-selected="modelValue === opt.id"
      class="filters__btn"
      :class="{ 'filters__btn--active': modelValue === opt.id }"
      @click="emit('update:modelValue', opt.id)"
    >
      {{ opt.title }}
    </button>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.filters__btn {
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-pill);
  padding: 0.5rem 1rem;
  font-size: var(--fs-small);
  font-weight: 600;
  color: var(--text-secondary);
  transition: all 0.15s ease;
}

.filters__btn--active {
  background: var(--text-primary);
  border-color: var(--text-primary);
  color: var(--surface-page);
}

.filters__btn:not(.filters__btn--active):hover {
  border-color: var(--color-blueprint);
  color: var(--color-blueprint);
}
</style>
