<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getServicesByCategory } from '../data/services'
import ServiceFilters from '../components/catalog/ServiceFilters.vue'
import ServiceCard from '../components/catalog/ServiceCard.vue'

const route = useRoute()
const router = useRouter()

const activeCategory = ref(route.query.category || 'all')

watch(activeCategory, (val) => {
  router.replace({ query: val === 'all' ? {} : { category: val } })
})

watch(
  () => route.query.category,
  (val) => {
    activeCategory.value = val || 'all'
  }
)

const filteredServices = computed(() => getServicesByCategory(activeCategory.value))
</script>

<template>
  <div class="catalog section">
    <div class="container">
      <span class="eyebrow">каталог</span>
      <h1 class="catalog__title">Услуги ВЕБРАЗРАБОТКА</h1>
      <p class="catalog__lead">
        Выбирайте услуги по отдельности или соберите пакет — каждая позиция добавляется в корзину.
      </p>

      <div class="catalog__filters">
        <ServiceFilters v-model="activeCategory" />
      </div>

      <p class="catalog__count mono">{{ filteredServices.length }} услуг найдено</p>

      <div class="catalog__grid">
        <ServiceCard v-for="service in filteredServices" :key="service.id" :service="service" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
}
.catalog__lead {
  margin-top: var(--space-3);
  color: var(--text-secondary);
  max-width: 56ch;
}
.catalog__filters {
  margin-top: var(--space-5);
}
.catalog__count {
  margin-top: var(--space-3);
  font-size: var(--fs-micro);
  color: var(--text-secondary);
}
.catalog__grid {
  margin-top: var(--space-4);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-4);
}
</style>
