<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import CartDrawer from './components/cart/CartDrawer.vue'
</script>

<template>
  <div class="app-shell">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
    <CartDrawer />
  </div>
</template>

<style>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
