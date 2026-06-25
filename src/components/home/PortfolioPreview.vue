<script setup>
import IconArrowRight from '../ui/IconArrowRight.vue'

const projects = [
  {
    title: 'Аква-Он',
    url: 'https://akva-on.ru/',
    category: 'Эксклюзивный сайт',
    description: 'Комплекс саун с бассейном и бильярдом в Нижнем Новгороде — сайт с описанием номеров и онлайн-бронированием.',
  },
  {
    title: 'РСК Инжиниринг',
    url: 'https://rsk-e.ru/',
    category: 'Эксклюзивный сайт',
    description: 'Поставка и настройка метрологического и ИТ-оборудования — корпоративный сайт с каталогом и заявками.',
  },
  {
    title: 'Ideal Media NN',
    url: 'https://reklamanatransport.ru/',
    category: 'Эксклюзивный сайт',
    description: 'Рекламное агентство: наружная реклама и брендирование транспорта в Нижнем Новгороде.',
  },
  {
    title: 'Цветочки-Череночки',
    url: 'https://cvetochki-cherenochki.ru/',
    category: 'Интернет-магазин',
    description: 'Магазин комнатных и садовых цветов в Электрогорске — каталог, корзина и оформление заказа.',
  },
  {
    title: 'ДомСадНН',
    url: 'https://dom-sad-nn.ru/',
    category: 'Сайт-витрина',
    description: 'Строительство каркасных домов и бань под ключ в Нижнем Новгороде — типовые проекты и расчёт стоимости.',
  },
]
</script>

<template>
  <section id="portfolio" class="section portfolio">
    <div class="container">
      <span class="eyebrow">портфолио</span>
      <h2 class="section__title">Что мы уже сделали</h2>
      <p class="section__lead">Несколько проектов студии — переходите по ссылке, чтобы увидеть сайт целиком.</p>

      <div class="portfolio__grid">
        <a
          v-for="project in projects"
          :key="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="portfolio__card"
        >
          <span class="portfolio__category mono">{{ project.category }}</span>
          <h3 class="portfolio__title">{{ project.title }}</h3>
          <p class="portfolio__desc">{{ project.description }}</p>
          <span class="portfolio__link mono">
            {{ project.url.replace('https://', '') }}
            <IconArrowRight class="portfolio__link-icon" />
          </span>
        </a>
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
  max-width: 56ch;
}

.portfolio__grid {
  margin-top: var(--space-6);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-4);
}

.portfolio__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-4);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.portfolio__card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: var(--color-blueprint);
}

.portfolio__category {
  font-size: var(--fs-micro);
  color: var(--color-blueprint);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.portfolio__title {
  font-size: 1.1rem;
  font-family: var(--font-display);
}

.portfolio__desc {
  color: var(--text-secondary);
  font-size: var(--fs-small);
  flex: 1;
}

.portfolio__link {
  font-size: var(--fs-micro);
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}
.portfolio__link-icon {
  width: 13px;
  height: 13px;
}
</style>
