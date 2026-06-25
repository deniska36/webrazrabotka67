<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { submitLead } from '../utils/leadSubmit'
import CartItem from '../components/cart/CartItem.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const cart = useCartStore()
const router = useRouter()

const name = ref('')
const phone = ref('')
const comment = ref('')
const isSubmitted = ref(false)
const isSubmitting = ref(false)

function formatRub(value) {
  return new Intl.NumberFormat('ru-RU').format(value)
}

async function submit() {
  if (!name.value || !phone.value || isSubmitting.value) return

  isSubmitting.value = true
  await submitLead('Новая заявка с сайта ВЕБРАЗРАБОТКА (корзина)', [
    ['Имя', name.value],
    ['Телефон', phone.value],
    ['Комментарий', comment.value],
    ['Услуги', cart.lines.map((l) => `${l.service.title} ×${l.qty}`).join(', ')],
    ['Сумма по фикс. ценам', cart.hasPricedLines ? formatRub(cart.total) + ' ₽' : 'нет фикс. цен'],
  ])

  cart.clear()
  isSubmitting.value = false
  isSubmitted.value = true
}

function goHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="cart-page section">
    <div class="container">
      <span class="eyebrow">корзина</span>
      <h1 class="cart-page__title">Оформление заявки</h1>

      <div v-if="isSubmitted" class="cart-page__success">
        <p>Заявка принята. Мы свяжемся с вами в течение рабочего дня.</p>
        <BaseButton variant="primary" @click="goHome">На главную</BaseButton>
      </div>

      <div v-else-if="cart.isEmpty" class="cart-page__empty">
        <p>В корзине пока нет услуг.</p>
        <router-link to="/catalog" class="mono">→ выбрать услуги в каталоге</router-link>
      </div>

      <div v-else class="cart-page__grid">
        <ul class="cart-page__list">
          <CartItem v-for="line in cart.lines" :key="line.serviceId" :line="line" />
        </ul>

        <form class="cart-page__form" @submit.prevent="submit">
          <div class="cart-page__total mono">
            <span>{{ cart.hasUnpricedLines ? 'Итого (по фикс. ценам)' : 'Итого' }}</span>
            <span>{{ formatRub(cart.total) }} ₽</span>
          </div>
          <p v-if="cart.hasUnpricedLines" class="cart-page__price-note">
            Часть позиций — «цена по запросу»: менеджер уточнит точную стоимость после брифа.
          </p>

          <label class="field">
            <span>Имя</span>
            <input v-model="name" type="text" required placeholder="Как к вам обращаться" />
          </label>

          <label class="field">
            <span>Телефон</span>
            <input v-model="phone" type="tel" required placeholder="+7 (___) ___-__-__" />
          </label>

          <label class="field">
            <span>Комментарий (необязательно)</span>
            <textarea v-model="comment" rows="3" placeholder="Детали проекта, ссылки, сроки" />
          </label>

          <BaseButton variant="primary" tag="button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Отправляем…' : 'Отправить заявку' }}
          </BaseButton>
          <p class="cart-page__note">Без созвонов на этом шаге — просто оставьте контакты.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
}

.cart-page__empty,
.cart-page__success {
  margin-top: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 50ch;
}

.cart-page__grid {
  margin-top: var(--space-6);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  align-items: start;
}

.cart-page__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.cart-page__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-4);
}

.cart-page__total {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-color);
}

.cart-page__price-note {
  font-size: var(--fs-micro);
  color: var(--text-secondary);
  margin-top: calc(-1 * var(--space-2));
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: var(--fs-small);
  font-weight: 600;
}

.field input,
.field textarea {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-s);
  background: var(--surface-page);
  color: var(--text-primary);
  resize: vertical;
}
.field input:focus,
.field textarea:focus {
  outline: 2px solid var(--color-blueprint);
  outline-offset: 1px;
}

.cart-page__note {
  font-size: var(--fs-micro);
  color: var(--text-secondary);
}

@media (max-width: 760px) {
  .cart-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
