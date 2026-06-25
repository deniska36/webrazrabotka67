<script setup>
const props = defineProps({
  amount: { type: Number, default: null },
  unit: { type: String, default: '' },
})

function formatRub(value) {
  return new Intl.NumberFormat('ru-RU').format(value)
}
</script>

<template>
  <span class="price-tag">
    <template v-if="typeof props.amount === 'number'">
      <span class="amount mono">от {{ formatRub(props.amount) }} ₽</span>
      <span v-if="props.unit" class="unit">{{ props.unit }}</span>
    </template>
    <span v-else class="amount amount--quote mono">цена по запросу</span>
  </span>
</template>

<style scoped>
.price-tag {
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.amount {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-primary);
}
.amount--quote {
  color: var(--color-blueprint);
  font-size: 0.95rem;
}
.unit {
  font-size: var(--fs-small);
  color: var(--text-secondary);
}
</style>
