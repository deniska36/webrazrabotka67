<script setup>
import { categories } from '../../data/services'
import IconCategory from '../ui/IconCategory.vue'
import IconArrowRight from '../ui/IconArrowRight.vue'
</script>

<template>
  <section class="section services-overview">
    <div class="container">
      <span class="eyebrow">направления</span>
      <h2 class="section__title">Пять направлений — одна студия</h2>
      <p class="section__lead">
        Не нужно искать разных подрядчиков на сайт, дизайн и рекламу — закрываем всё в одном месте.
      </p>

      <div class="cards-grid">
        <router-link
          v-for="cat in categories"
          :key="cat.id"
          :to="{ path: '/catalog', query: { category: cat.id } }"
          class="cat-card"
        >
          <IconCategory :name="cat.id" class="cat-card__icon" />
          <h3 class="cat-card__title">{{ cat.title }}</h3>
          <p class="cat-card__tagline">{{ cat.tagline }}</p>
          <IconArrowRight class="cat-card__arrow" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
  max-width: 22ch;
}

.section__lead {
  margin-top: var(--space-3);
  color: var(--text-secondary);
  max-width: 56ch;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-6);
}

.cat-card {
  position: relative;
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.cat-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: var(--color-blueprint);
}

.cat-card__icon {
  width: 32px;
  height: 32px;
  color: var(--color-blueprint);
}

.cat-card__title {
  font-size: var(--fs-h3);
  font-family: var(--font-display);
}

.cat-card__tagline {
  color: var(--text-secondary);
  font-size: var(--fs-small);
}

.cat-card__arrow {
  position: absolute;
  top: var(--space-5);
  right: var(--space-5);
  width: 18px;
  height: 18px;
  color: var(--color-blueprint);
}
</style>
