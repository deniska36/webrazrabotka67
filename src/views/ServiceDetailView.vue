<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getServiceById, getServicesByCategory, categories } from '../data/services'
import { useCartStore } from '../stores/cart'
import PriceTag from '../components/ui/PriceTag.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import ServiceCard from '../components/catalog/ServiceCard.vue'

const props = defineProps({
  id: { type: String, required: true },
})

const router = useRouter()
const cart = useCartStore()
const justAdded = ref(false)

const service = computed(() => getServiceById(props.id))
const category = computed(() => categories.find((c) => c.id === service.value?.categoryId))

const relatedServices = computed(() => {
  if (!service.value) return []
  return getServicesByCategory(service.value.categoryId)
    .filter((s) => s.id !== service.value.id)
    .slice(0, 3)
})

function addAndCheckout() {
  cart.add(service.value.id)
  router.push({ name: 'cart' })
}

function addToCart() {
  cart.add(service.value.id)
  justAdded.value = true
  setTimeout(() => (justAdded.value = false), 1500)
}
</script>

<template>
  <div v-if="service" class="detail section">
    <div class="container detail__grid">
      <div class="detail__main">
        <router-link to="/catalog" class="detail__back mono">← все услуги</router-link>
        <span class="eyebrow">{{ category?.title }}</span>
        <h1 class="detail__title">{{ service.title }}</h1>
        <p class="detail__desc">{{ service.description }}</p>
        <p v-if="service.priceNote" class="detail__note">{{ service.priceNote }}</p>
      </div>

      <aside class="detail__sidebar">
        <PriceTag :amount="service.basePrice" :unit="service.priceUnit" />
        <BaseButton variant="primary" @click="addAndCheckout">Заказать</BaseButton>
        <BaseButton variant="ghost" @click="addToCart">
          {{ justAdded ? 'Добавлено ✓' : 'Добавить в корзину' }}
        </BaseButton>
      </aside>
    </div>

    <div v-if="relatedServices.length" class="container detail__related">
      <h2 class="detail__related-title">Похожие услуги из раздела «{{ category?.title }}»</h2>
      <div class="detail__related-grid">
        <ServiceCard v-for="rs in relatedServices" :key="rs.id" :service="rs" />
      </div>
    </div>
  </div>
  <div v-else class="container section">
    <p>Услуга не найдена. <router-link to="/catalog">Вернуться в каталог</router-link></p>
  </div>
</template>

<style scoped>
.detail__grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-6);
}

.detail__back {
  display: grid;
  margin-bottom: var(--space-3);
  color: var(--text-secondary);
  font-size: var(--fs-small);
}

.detail__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
}

.detail__desc {
  margin-top: var(--space-4);
  color: var(--text-secondary);
  max-width: 60ch;
}

.detail__note {
  margin-top: var(--space-3);
  font-size: var(--fs-small);
  color: var(--text-secondary);
  background: var(--surface-alt);
  border-radius: var(--radius-m);
  padding: var(--space-3);
  max-width: 60ch;
}

.detail__sidebar {
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-self: start;
  position: sticky;
  top: 90px;
}

@media (max-width: 760px) {
  .detail__grid {
    grid-template-columns: 1fr;
  }
}

.detail__related {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border-color);
}

.detail__related-title {
  font-size: var(--fs-h2);
  font-family: var(--font-display);
}

.detail__related-grid {
  margin-top: var(--space-5);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-4);
}
</style>
