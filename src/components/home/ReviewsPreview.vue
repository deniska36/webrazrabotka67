<script setup>
import { ref } from 'vue'
import { reviews } from '../../data/reviews'
import IconStar from '../ui/IconStar.vue'
import IconClose from '../ui/IconClose.vue'

const activeReview = ref(null)

function openReview(review) {
  activeReview.value = review
}
function closeReview() {
  activeReview.value = null
}
</script>

<template>
  <section class="section reviews">
    <div class="container">
      <span class="eyebrow">отзывы</span>
      <h2 class="section__title">Что говорят клиенты</h2>

      <div class="reviews__grid">
        <button
          v-for="review in reviews"
          :key="review.id"
          type="button"
          class="review-card"
          @click="openReview(review)"
        >
          <div class="review-card__stars">
            <IconStar v-for="i in review.rating" :key="i" class="star" />
          </div>
          <p class="review-card__text">{{ review.text }}</p>
          <div class="review-card__footer">
            <span class="review-card__name">{{ review.name }}</span>
            <span class="review-card__date mono">{{ review.date }}</span>
          </div>
          <span class="review-card__more mono">Читать полностью →</span>
        </button>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="activeReview" class="modal-overlay" @click.self="closeReview">
        <div class="modal" role="dialog" aria-label="Отзыв клиента">
          <button class="modal__close" aria-label="Закрыть" @click="closeReview">
            <IconClose />
          </button>
          <div class="modal__stars">
            <IconStar v-for="i in activeReview.rating" :key="i" class="star" />
          </div>
          <p class="modal__text">{{ activeReview.text }}</p>
          <div class="modal__footer">
            <span class="modal__name">{{ activeReview.name }}</span>
            <span class="modal__date mono">{{ activeReview.date }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.section__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
}

.reviews__grid {
  margin-top: var(--space-6);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-4);
}

.review-card {
  text-align: left;
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-family: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.review-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: var(--color-blueprint);
}

.review-card__stars,
.modal__stars {
  display: flex;
  gap: 0.15rem;
  color: var(--color-signal);
}
.review-card__stars .star,
.modal__stars .star {
  width: 16px;
  height: 16px;
}

.review-card__text {
  font-size: var(--fs-small);
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.review-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px solid var(--border-color-soft);
}

.review-card__name {
  font-weight: 600;
  font-size: var(--fs-small);
  color: var(--text-primary);
}

.review-card__date {
  font-size: var(--fs-micro);
  color: var(--text-secondary);
  white-space: nowrap;
}

.review-card__more {
  font-size: var(--fs-micro);
  color: var(--color-blueprint);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(21, 33, 46, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  z-index: 90;
}

.modal {
  position: relative;
  background: var(--surface-card);
  border-radius: var(--radius-l);
  padding: var(--space-5);
  max-width: 560px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.modal__close {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-alt);
  border: none;
  border-radius: 50%;
  color: var(--text-primary);
}
.modal__close svg {
  width: 16px;
  height: 16px;
}

.modal__text {
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--text-primary);
  padding-right: var(--space-4);
}

.modal__footer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: var(--space-3);
  border-top: 1px solid var(--border-color);
}

.modal__name {
  font-weight: 600;
}

.modal__date {
  font-size: var(--fs-small);
  color: var(--text-secondary);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.15s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
