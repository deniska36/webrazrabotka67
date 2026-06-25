<script setup>
import { ref } from 'vue'
import { categories } from '../../data/services'
import { submitLead } from '../../utils/leadSubmit'

const form = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  currentSite: '',
  city: '',
  serviceInterest: '',
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)
const triedSubmit = ref(false)

function isValid() {
  return form.value.name && form.value.phone && form.value.email
}

async function submit() {
  triedSubmit.value = true
  if (!isValid() || isSubmitting.value) return

  isSubmitting.value = true
  await submitLead('Новая заявка с сайта ВЕБРАЗРАБОТКА (лид-форма)', [
    ['Имя', form.value.name],
    ['Компания', form.value.company],
    ['Телефон', form.value.phone],
    ['Email', form.value.email],
    ['Текущий сайт', form.value.currentSite],
    ['Город', form.value.city],
    ['Интересующая услуга', form.value.serviceInterest],
  ])
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <section class="section lead" id="lead-form">
    <div class="container lead__grid">
      <div class="lead__info">
        <span class="eyebrow">бесплатная консультация</span>
        <h2 class="lead__title">Узнайте стоимость для вашего бизнеса</h2>
        <p class="lead__lead">
          Оставьте контакты — посмотрим на ваш текущий сайт (если есть) и предложим конкретные
          варианты с ценами, без шаблонных предложений.
        </p>
        <ul class="lead__points">
          <li><span class="mono">16</span> лет на рынке</li>
          <li><span class="mono">2500+</span> сайтов создано</li>
          <li><span class="mono">1000+</span> сайтов на постоянной поддержке</li>
        </ul>
      </div>

      <div class="lead__form-wrap">
        <form v-if="!isSubmitted" class="lead__form" @submit.prevent="submit">
          <div class="lead__row">
            <label class="field">
              <span>Имя *</span>
              <input v-model="form.name" type="text" required placeholder="Как к вам обращаться" />
            </label>
            <label class="field">
              <span>Название компании</span>
              <input v-model="form.company" type="text" placeholder="Необязательно" />
            </label>
          </div>

          <div class="lead__row">
            <label class="field">
              <span>Телефон *</span>
              <input v-model="form.phone" type="tel" required placeholder="+7 (___) ___-__-__" />
            </label>
            <label class="field">
              <span>Email *</span>
              <input v-model="form.email" type="email" required placeholder="you@mail.ru" />
            </label>
          </div>

          <label class="field">
            <span>Адрес действующего сайта</span>
            <input v-model="form.currentSite" type="text" placeholder="https://www." />
          </label>

          <div class="lead__row">
            <label class="field">
              <span>Город</span>
              <input v-model="form.city" type="text" placeholder="Например, Нижний Новгород" />
            </label>
            <label class="field">
              <span>Интересующая услуга</span>
              <select v-model="form.serviceInterest">
                <option value="">Выберите услугу</option>
                <option v-for="cat in categories" :key="cat.id" :value="cat.title">
                  {{ cat.title }}
                </option>
                <option value="other">Другое</option>
              </select>
            </label>
          </div>


          <p v-if="triedSubmit && !isValid()" class="lead__error">
            Заполните имя, телефон, email
          </p>

          <button type="submit" class="lead__submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Отправляем…' : 'Отправить заявку' }}
          </button>
        </form>

        <div v-else class="lead__success">
          <p class="lead__success-title">Заявка отправлена</p>
          <p>Мы свяжемся с вами по указанному телефону или email в течение рабочего дня.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lead {
  background: var(--surface-alt);
}

.lead__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-6);
  align-items: start;
}

.lead__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
  max-width: 18ch;
}

.lead__lead {
  margin-top: var(--space-4);
  color: var(--text-secondary);
  max-width: 44ch;
}

.lead__points {
  margin-top: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-size: var(--fs-small);
  color: var(--text-primary);
}
.lead__points .mono {
  color: var(--color-blueprint);
  font-weight: 700;
  margin-right: 0.4rem;
}

.lead__form-wrap {
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-5);
  box-shadow: var(--shadow-card);
}

.lead__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.lead__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: var(--fs-small);
  font-weight: 600;
}

.field input,
.field select {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-s);
  background: var(--surface-page);
  color: var(--text-primary);
}
.field input:focus,
.field select:focus {
  outline: 2px solid var(--color-blueprint);
  outline-offset: 1px;
}

.lead__consent {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: var(--fs-micro);
  color: var(--text-secondary);
  line-height: 1.4;
}
.lead__consent input {
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.lead__error {
  font-size: var(--fs-micro);
  color: #b3261e;
}

.lead__submit {
  margin-top: var(--space-2);
  background: var(--color-signal);
  color: var(--surface-card);
  border: none;
  border-radius: var(--radius-pill);
  padding: 0.8rem 1.4rem;
  font-weight: 600;
  font-size: var(--fs-body);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.lead__submit:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-raised);
}
.lead__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.lead__success {
  text-align: center;
  padding: var(--space-6) var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.lead__success-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--color-success);
}

@media (max-width: 860px) {
  .lead__grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 540px) {
  .lead__row {
    grid-template-columns: 1fr;
  }
}
</style>
