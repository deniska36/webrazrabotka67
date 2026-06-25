<script setup>
import { computed, ref } from 'vue'
import { services, getServiceById, hasPrice } from '../../data/services'
import { useCartStore } from '../../stores/cart'
import BaseButton from '../ui/BaseButton.vue'

const cart = useCartStore()


const siteOptions = services.filter((s) => s.categoryId === 'sites' && hasPrice(s))
const selectedSiteId = ref(siteOptions[0].id)

const addonOptions = services.filter((s) => s.categoryId === 'hosting' && hasPrice(s))
const selectedAddons = ref([])

const selectedSite = computed(() => getServiceById(selectedSiteId.value))
const selectedAddonServices = computed(() =>
  selectedAddons.value.map((id) => getServiceById(id)).filter(Boolean)
)

const lines = computed(() => {
  const result = [{ label: selectedSite.value.title, amount: selectedSite.value.basePrice }]
  selectedAddonServices.value.forEach((s) => {
    result.push({ label: s.title, amount: s.basePrice })
  })
  return result
})

const total = computed(() => lines.value.reduce((sum, l) => sum + l.amount, 0))

function formatRub(value) {
  return new Intl.NumberFormat('ru-RU').format(value)
}

function toggleAddon(id) {
  const idx = selectedAddons.value.indexOf(id)
  if (idx === -1) {
    selectedAddons.value.push(id)
  } else {
    selectedAddons.value.splice(idx, 1)
  }
}

const justAdded = ref(false)
function addEstimateToCart() {
  cart.add(selectedSite.value.id)
  selectedAddonServices.value.forEach((s) => cart.add(s.id))
  justAdded.value = true
  setTimeout(() => (justAdded.value = false), 2000)
}
</script>

<template>
  <section id="calculator" class="section calculator">
    <div class="container">
      <span class="eyebrow">примерный расчёт</span>
      <h2 class="section__title">Калькулятор стоимости</h2>
      <p class="section__lead">
        Расчёт по услугам с фиксированной ценой — собирается сразу, как код компилируется в результат.
        Остальные услуги (магазины, реклама, продвижение) считаются индивидуально под задачу,
        их можно добавить в корзину отдельно из каталога.
      </p>

      <div class="calc__panel">
        <div class="calc__controls">
          <fieldset class="calc__field">
            <legend class="calc__label mono">01 / тип сайта</legend>
            <div class="calc__options">
              <label v-for="opt in siteOptions" :key="opt.id" class="calc__option">
                <input v-model="selectedSiteId" type="radio" :value="opt.id" name="site-type" />
                <span>{{ opt.title }}</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="calc__field">
            <legend class="calc__label mono">02 / хостинг и домен</legend>
            <div class="calc__options">
              <label v-for="opt in addonOptions" :key="opt.id" class="calc__option">
                <input
                  type="checkbox"
                  :checked="selectedAddons.includes(opt.id)"
                  @change="toggleAddon(opt.id)"
                />
                <span>{{ opt.title }}</span>
              </label>
            </div>
          </fieldset>
        </div>

        <div class="calc__terminal" role="status">
          <div class="calc__terminal-head">
            <span class="mono"></span>
          </div>
          <ul class="calc__lines">
            <li v-for="(line, i) in lines" :key="i" class="calc__line mono">
              <span>▸ {{ line.label }}</span>
              <span>{{ formatRub(line.amount) }} ₽</span>
            </li>
          </ul>
          <div class="calc__total mono">
            <span>= итого</span>
            <span>{{ formatRub(total) }} ₽</span>
          </div>
          <BaseButton variant="primary" @click="addEstimateToCart">
            {{ justAdded ? 'Добавлено в корзину ✓' : 'Добавить в корзину' }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
}
.section__lead {
  margin-top: var(--space-3);
  color: var(--text-secondary);
  max-width: 60ch;
}

.calc__panel {
  margin-top: var(--space-6);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  align-items: start;
}

.calc__field {
  border: none;
  padding: 0;
  margin: 0 0 var(--space-5);
}

.calc__label {
  font-size: var(--fs-micro);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-blueprint);
  margin-bottom: var(--space-3);
  display: block;
}

.calc__options {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.calc__option {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-small);
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-m);
  padding: 0.6rem 0.8rem;
  cursor: pointer;
}
.calc__option:has(input:checked) {
  border-color: var(--color-blueprint);
  background: var(--tint-blueprint);
}

.calc__terminal {
  background: var(--color-ink);
  color: var(--color-paper);
  border-radius: var(--radius-l);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.calc__terminal-head {
  font-size: var(--fs-micro);
  color: rgba(245, 242, 236, 0.5);
  border-bottom: 1px solid rgba(245, 242, 236, 0.12);
  padding-bottom: var(--space-2);
}

.calc__lines {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-height: 4rem;
}

.calc__line {
  display: flex;
  justify-content: space-between;
  gap: var(--space-2);
  font-size: var(--fs-small);
  color: rgba(245, 242, 236, 0.85);
}
.calc__line span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.calc__total {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  border-top: 1px solid rgba(245, 242, 236, 0.12);
  padding-top: var(--space-3);
  color: var(--color-signal);
}

@media (max-width: 760px) {
  .calc__panel {
    grid-template-columns: 1fr;
  }
}
</style>
