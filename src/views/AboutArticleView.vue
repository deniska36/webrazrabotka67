<script setup>
import { computed } from 'vue'
import { getArticleBySlug } from '../data/articles'
import BaseButton from '../components/ui/BaseButton.vue'

const props = defineProps({
  slug: { type: String, required: true },
})

const article = computed(() => getArticleBySlug(props.slug))
</script>

<template>
  <div v-if="article" class="article section">
    <div class="container article__inner">
      <router-link to="/about" class="article__back mono">← о компании</router-link>
      <span class="eyebrow">{{ article.lead }}</span>
      <h1 class="article__title">{{ article.title }}</h1>

      <div class="article__intro">
        <p v-for="(p, i) in article.intro" :key="i">{{ p }}</p>
      </div>

      <div v-for="(section, sIdx) in article.sections" :key="sIdx" class="article__section">
        <h2 v-if="section.heading" class="article__section-title">{{ section.heading }}</h2>

        <ul v-if="section.type === 'list'" class="article__list">
          <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
        </ul>

        <ol v-else-if="section.type === 'numbered'" class="article__numbered">
          <li v-for="(item, i) in section.items" :key="i">
            <span class="article__num mono">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ item }}</span>
          </li>
        </ol>

        <div v-else-if="section.type === 'paragraphs'" class="article__paragraphs">
          <p v-for="(item, i) in section.items" :key="i">{{ item }}</p>
        </div>

        <div v-else-if="section.type === 'package'" class="article__package">
          <ul class="article__list">
            <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
          </ul>
          <div class="article__package-price mono">{{ section.price }}</div>
          <p v-if="section.note" class="article__note">{{ section.note }}</p>
        </div>

        <div v-else-if="section.type === 'pricing'" class="article__pricing">
          <div
            v-for="tier in section.tiers"
            :key="tier.label"
            class="article__tier"
            :class="{ 'article__tier--recommended': tier.recommended }"
          >
            <span v-if="tier.recommended" class="article__tier-badge mono">рекомендуем</span>
            <span class="article__tier-label">{{ tier.label }}</span>
            <span class="article__tier-price mono">{{ tier.price }}</span>
          </div>
          <p v-if="section.note" class="article__note">{{ section.note }}</p>
        </div>
      </div>

      <div class="article__cta">
        <BaseButton tag="router-link" :to="{ path: '/', hash: '#lead-form' }" variant="primary">
          Бесплатная консультация
        </BaseButton>
      </div>
    </div>
  </div>
  <div v-else class="container section">
    <p>Страница не найдена. <router-link to="/about">Вернуться в «О нас»</router-link></p>
  </div>
</template>

<style scoped>
.article__inner {
  max-width: 760px;
}

.article__back {
  display: grid;
  margin-bottom: var(--space-3);
  color: var(--text-secondary);
}

.article__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
}

.article__intro {
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
}

.article__section {
  margin-top: var(--space-7);
}

.article__section-title {
  font-size: var(--fs-h2);
  font-family: var(--font-display);
  margin-bottom: var(--space-4);
}

.article__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.article__list li {
  position: relative;
  padding-left: 1.3rem;
  color: var(--text-primary);
  line-height: 1.5;
}
.article__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-blueprint);
}

.article__numbered {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.article__numbered li {
  display: flex;
  gap: var(--space-3);
  align-items: baseline;
}
.article__num {
  color: var(--color-blueprint);
  flex-shrink: 0;
}

.article__paragraphs {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  color: var(--text-primary);
  line-height: 1.6;
}

.article__package {
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-4);
}
.article__package-price {
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--border-color-soft);
  font-weight: 600;
  color: var(--color-signal);
}

.article__note {
  margin-top: var(--space-2);
  font-size: var(--fs-small);
  color: var(--text-secondary);
}

.article__pricing {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--space-3);
}
.article__tier {
  position: relative;
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-m);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.article__tier--recommended {
  border-color: var(--color-blueprint);
  background: var(--color-blueprint-dim);
}
.article__tier-badge {
  position: absolute;
  top: -10px;
  right: var(--space-3);
  background: var(--color-blueprint);
  color: var(--surface-card);
  font-size: var(--fs-micro);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-pill);
}
.article__tier-label {
  font-size: var(--fs-small);
  color: var(--text-secondary);
}
.article__tier-price {
  font-size: 1.1rem;
  font-weight: 700;
}

.article__cta {
  margin-top: var(--space-7);
  padding-top: var(--space-5);
  border-top: 1px solid var(--border-color);
}
</style>
