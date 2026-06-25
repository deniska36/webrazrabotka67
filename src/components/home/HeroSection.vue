<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section class="hero blueprint-grid">
    <div class="container hero__inner">
      <span class="eyebrow">webrazrabotka · нижний новгород</span>
      <h1 class="hero__title">
        Сайты и продвижение,<br />
        которые <span class="accent">собираются</span> по чёткому плану
      </h1>
      <p class="hero__lead">
        Делаем сайты, интернет-магазины, рекламу, продвижение и хостинг для бизнеса
        в Нижнем Новгороде. Прозрачная стоимость там, где это возможно — без созвонов и долгих переговоров.
      </p>
      <div class="hero__actions">
        <BaseButton tag="router-link" :to="{ path: '/catalog' }" variant="primary">
          Смотреть услуги
        </BaseButton>
        <BaseButton tag="a" href="#calculator" variant="ghost">
          Рассчитать стоимость
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--space-8) 0 var(--space-7);
  border-bottom: 1px solid var(--border-color);
}

.hero__inner {
  max-width: 760px;
}

.hero__title {
  font-size: var(--fs-hero);
  margin-top: var(--space-4);
}

.hero__title .accent {
  color: var(--color-blueprint);
}

.hero__lead {
  margin-top: var(--space-4);
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 56ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-5);
}

</style>
