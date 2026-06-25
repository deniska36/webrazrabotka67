<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '../../stores/cart'
import CartItem from './CartItem.vue'
import BaseButton from '../ui/BaseButton.vue'
import IconClose from '../ui/IconClose.vue'

const cart = useCartStore()
const router = useRouter()

function goToCheckout() {
  cart.closeDrawer()
  router.push({ name: 'cart' })
}
</script>

<template>
  <Transition name="drawer">
    <div v-if="cart.isDrawerOpen" class="drawer-overlay" @click.self="cart.closeDrawer()">
      <aside class="drawer" role="dialog" aria-label="Корзина">
        <div class="drawer__head">
          <h2 class="mono">Корзина</h2>
          <button class="drawer__close" aria-label="Закрыть" @click="cart.closeDrawer()">
            <IconClose />
          </button>
        </div>

        <div v-if="cart.isEmpty" class="drawer__empty">
          <p>Пока пусто. Добавьте услугу из каталога или калькулятора.</p>
        </div>

        <ul v-else class="drawer__list">
          <CartItem v-for="line in cart.lines" :key="line.serviceId" :line="line" />
        </ul>

        <div v-if="!cart.isEmpty" class="drawer__footer">
          <p v-if="cart.hasUnpricedLines" class="drawer__note">
            Часть позиций — «цена по запросу», их стоимость менеджер уточнит отдельно.
          </p>
          <div class="drawer__total mono">
            <span>{{ cart.hasUnpricedLines ? 'Итого (по фикс. ценам)' : 'Итого' }}</span>
            <span>{{ new Intl.NumberFormat('ru-RU').format(cart.total) }} ₽</span>
          </div>
          <BaseButton variant="primary" @click="goToCheckout">Оформить заявку</BaseButton>
        </div>
      </aside>
    </div>
  </Transition>
</template>

<style scoped>
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(21, 33, 46, 0.4);
  display: flex;
  justify-content: flex-end;
  z-index: 80;
}

.drawer {
  width: min(380px, 100%);
  height: 100%;
  background: var(--surface-page);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  overflow-y: auto;
}

.drawer__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer__close {
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  flex-shrink: 0;
}
.drawer__close svg {
  width: 18px;
  height: 18px;
}

.drawer__empty {
  color: var(--text-secondary);
  font-size: var(--fs-small);
}

.drawer__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

.drawer__footer {
  border-top: 1px solid var(--border-color);
  padding-top: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.drawer__total {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.drawer__note {
  font-size: var(--fs-micro);
  color: var(--text-secondary);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
</style>
