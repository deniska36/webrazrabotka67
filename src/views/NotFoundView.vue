<script setup></script>

<template>
  <div class="container section not-found">
    <span class="eyebrow mono">404</span>
    <h1>Страница не найдена</h1>
    <p><router-link to="/">← вернуться на главную</router-link></p>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: var(--space-8) 0;
}
.not-found h1 {
  margin-top: var(--space-3);
  font-size: var(--fs-h1);
}
.not-found p {
  margin-top: var(--space-4);
}
</style>
