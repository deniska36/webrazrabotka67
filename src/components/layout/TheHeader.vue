<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../../stores/cart'
import { useThemeStore } from '../../stores/theme'
import IconCart from '../ui/IconCart.vue'
import LogoMark from '../ui/LogoMark.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

const cart = useCartStore()
const themeStore = useThemeStore()
const count = computed(() => cart.count)

const logoVariant = computed(() => (themeStore.theme === 'dark' ? 'light' : 'dark'))
const isMobileOpen = ref(false)
const route = useRoute()
const router = useRouter()

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Услуги' },
  { to: '/about', label: 'О нас' },
  { to: '/#portfolio', label: 'Портфолио', isAnchor: true },
]

function scrollToPortfolioSection() {
  const el = document.getElementById('portfolio')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

async function goToPortfolio(event) {
  event.preventDefault()
  isMobileOpen.value = false
  if (route.path !== '/') {
    await router.push('/')
    // Главная грузится лениво — даём ей время отрендериться перед скроллом.
    setTimeout(scrollToPortfolioSection, 150)
  } else {
    scrollToPortfolioSection()
  }
}
</script>

<template>
  <header class="header">
    <div class="container header__row">
      <router-link to="/" class="logo" @click="isMobileOpen = false">
        <LogoMark :size="32" :variant="logoVariant" />
        <span class="logo__text">
          ВЕБ<span class="accent">РАЗРАБОТКА</span>
        </span>
      </router-link>

      <nav class="nav nav--desktop">
        <template v-for="item in navItems" :key="item.to">
          <a v-if="item.isAnchor" :href="item.to" class="nav__link" @click="goToPortfolio">
            {{ item.label }}
          </a>
          <router-link v-else :to="item.to" class="nav__link">{{ item.label }}</router-link>
        </template>
      </nav>

      <div class="header__actions">
        <ThemeToggle />
        <button class="cart-btn" type="button" @click="cart.openDrawer()" aria-label="Открыть корзину">
          <IconCart class="cart-btn__icon" />
          <span class="cart-btn__label mono">Корзина</span>
          <span v-if="count > 0" class="cart-btn__count">{{ count }}</span>
        </button>
        <button
          class="burger"
          type="button"
          :aria-expanded="isMobileOpen"
          aria-label="Открыть меню"
          @click="isMobileOpen = !isMobileOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <nav v-if="isMobileOpen" class="nav nav--mobile">
      <template v-for="item in navItems" :key="item.to">
        <a v-if="item.isAnchor" :href="item.to" class="nav__link" @click="goToPortfolio">
          {{ item.label }}
        </a>
        <router-link v-else :to="item.to" class="nav__link" @click="isMobileOpen = false">
          {{ item.label }}
        </router-link>
      </template>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--surface-page);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.header__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-3);
  padding-bottom: var(--space-3);
  gap: var(--space-3);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  flex-shrink: 0;
}

.logo__text .accent {
  color: var(--color-blueprint);
}

.nav--desktop {
  display: none;
  align-items: center;
  gap: var(--space-4);
}

.nav__link {
  font-weight: 600;
  font-size: var(--fs-small);
  color: var(--text-primary);
  position: relative;
  padding: 0.25rem 0;
  white-space: nowrap;
}
.nav__link.router-link-active {
  color: var(--color-blueprint);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.cart-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--color-ink);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-pill);
  padding: 0.5rem 0.8rem;
  font-size: var(--fs-small);
}

.cart-btn__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.cart-btn__count {
  background: var(--color-signal);
  color: var(--color-white);
  font-family: var(--font-mono);
  font-size: var(--fs-micro);
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.burger {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: 0.4rem;
}
.burger span {
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
}

.nav--mobile {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4) var(--space-4);
  border-top: 1px solid var(--border-color);
}


@media (max-width: 420px) {
  .cart-btn__label {
    display: none;
  }
  .cart-btn {
    padding: 0.5rem 0.6rem;
  }
}

@media (min-width: 860px) {
  .nav--desktop {
    display: flex;
  }
  .nav--mobile {
    display: none;
  }
  .burger {
    display: none;
  }
}
</style>
