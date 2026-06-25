<script setup>
defineProps({
  name: { type: String, required: true }, // sites | shops | ads | promo | hosting
})
</script>

<template>
  <svg
    class="icon-category"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g v-if="name === 'sites'">
      <rect x="6" y="9" width="36" height="30" rx="3" stroke="currentColor" stroke-width="2" />
      <line x1="6" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" />
      <circle cx="11.5" cy="13" r="1.4" fill="currentColor" />
      <circle cx="16" cy="13" r="1.4" fill="currentColor" />
      <line x1="12" y1="24" x2="32" y2="24" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <line x1="12" y1="30" x2="26" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </g>

    <g v-else-if="name === 'shops'">
      <path
        d="M10 16h28l-2.4 19.2A3 3 0 0 1 32.6 38H15.4a3 3 0 0 1-3-2.8L10 16Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path d="M17 16v-2a7 7 0 0 1 14 0v2" stroke="currentColor" stroke-width="2" />
      <line x1="16" y1="23" x2="32" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </g>

    <g v-else-if="name === 'ads'">
      <path
        d="M8 21v6a2 2 0 0 0 2 2h2l3 9h3l-2-9h2l16 6V14L18 20h-2H10a2 2 0 0 0-2 2v-1Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <line x1="34" y1="17" x2="34" y2="31" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </g>

    <g v-else-if="name === 'promo'">
      <path
        d="M8 32 18 21l6 6 12-13"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M28 14h8v8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <g v-else-if="name === 'hosting'">
      <rect x="10" y="9" width="28" height="11" rx="2" stroke="currentColor" stroke-width="2" />
      <rect x="10" y="24" width="28" height="11" rx="2" stroke="currentColor" stroke-width="2" />
      <circle cx="15.5" cy="14.5" r="1.4" fill="currentColor" />
      <circle cx="15.5" cy="29.5" r="1.4" fill="currentColor" />
      <line x1="21" y1="14.5" x2="32" y2="14.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
      <line x1="21" y1="29.5" x2="32" y2="29.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    </g>
  </svg>
</template>

<style scoped>
.icon-category {
  width: 28px;
  height: 28px;
}
</style>
