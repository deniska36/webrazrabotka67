<script setup>
import { ref } from 'vue'
import { useCartStore } from '../../stores/cart'
import PriceTag from '../ui/PriceTag.vue'
import BaseButton from '../ui/BaseButton.vue'

const props = defineProps({
  service: { type: Object, required: true },
})

const cart = useCartStore()
const justAdded = ref(false)

function addToCart() {
  cart.add(props.service.id)
  justAdded.value = true
  setTimeout(() => (justAdded.value = false), 1500)
}
</script>

<template>
  <article class="service-card">
    <h3 class="service-card__title">
      <router-link :to="{ name: 'service-detail', params: { id: service.id } }">
        {{ service.title }}
      </router-link>
    </h3>
    <p class="service-card__desc">{{ service.description }}</p>

    <div class="service-card__price">
      <PriceTag :amount="service.basePrice" :unit="service.priceUnit" />
    </div>

    <div class="service-card__footer">
      <BaseButton
        tag="router-link"
        :to="{ name: 'service-detail', params: { id: service.id } }"
        variant="ghost"
      >
        Подробнее
      </BaseButton>
      <BaseButton variant="primary" @click="addToCart">
        {{ justAdded ? 'Добавлено ✓' : 'В корзину' }}
      </BaseButton>
    </div>
  </article>
</template>

<style scoped>
.service-card {
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  height: 100%;
}

.service-card__title {
  font-size: 1.1rem;
  font-family: var(--font-display);
  line-height: 1.3;
}
.service-card__title a:hover {
  color: var(--color-blueprint);
}

.service-card__desc {
  color: var(--text-secondary);
  font-size: var(--fs-small);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.service-card__price {
  padding-top: var(--space-2);
  border-top: 1px solid var(--border-color-soft);
}

.service-card__footer {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
}
.service-card__footer .base-btn {
  flex: 1;
  white-space: normal;
}
</style>
