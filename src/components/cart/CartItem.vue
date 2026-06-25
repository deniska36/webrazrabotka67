<script setup>
import { useCartStore } from '../../stores/cart'

const props = defineProps({
  line: { type: Object, required: true },
})

const cart = useCartStore()

function formatRub(value) {
  return new Intl.NumberFormat('ru-RU').format(value)
}
</script>

<template>
  <li class="cart-item">
    <div class="cart-item__info">
      <p class="cart-item__title">{{ line.service.title }}</p>
      <p class="cart-item__price mono">
        {{ typeof line.service.basePrice === 'number' ? formatRub(line.service.basePrice) + ' ₽' : 'цена по запросу' }}
      </p>
    </div>
    <div class="cart-item__controls">
      <button
        type="button"
        class="cart-item__qty-btn"
        aria-label="Уменьшить количество"
        @click="cart.setQty(line.serviceId, line.qty - 1)"
      >
        −
      </button>
      <span class="mono">{{ line.qty }}</span>
      <button
        type="button"
        class="cart-item__qty-btn"
        aria-label="Увеличить количество"
        @click="cart.setQty(line.serviceId, line.qty + 1)"
      >
        +
      </button>
      <button type="button" class="cart-item__remove" aria-label="Удалить" @click="cart.remove(line.serviceId)">
        Удалить
      </button>
    </div>
  </li>
</template>

<style scoped>
.cart-item {
  border-bottom: 1px solid var(--border-color-soft);
  padding-bottom: var(--space-3);
}

.cart-item__info {
  display: flex;
  justify-content: space-between;
  gap: var(--space-2);
}

.cart-item__title {
  font-size: var(--fs-small);
  font-weight: 600;
}

.cart-item__price {
  font-size: var(--fs-small);
  white-space: nowrap;
}

.cart-item__controls {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.cart-item__qty-btn {
  background: var(--surface-alt);
  border: none;
  border-radius: var(--radius-s);
  width: 1.6rem;
  height: 1.6rem;
}

.cart-item__remove {
  margin-left: auto;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: var(--fs-micro);
  text-decoration: underline;
}
.cart-item__remove:hover {
  color: var(--color-signal);
}
</style>
