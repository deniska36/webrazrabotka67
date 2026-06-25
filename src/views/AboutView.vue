<script setup>
import BaseButton from '../components/ui/BaseButton.vue'
import IconCheck from '../components/ui/IconCheck.vue'
import IconArrowRight from '../components/ui/IconArrowRight.vue'
import { articles } from '../data/articles'

const serviceItems = [
  'Обучение заполнению сайта и технические консультации по телефону.',
  'Изменения по запросу: координаты, смена лого, реквизитов, адреса, карты, мелких недочётов и ошибок.',
  'Ежедневное копирование сайта и по первому требованию.',
  'Восстановление сбоя микропрограмм и модулей в течение года по первому требованию.',
  'Регулярные обновления системы безопасности и системы сайта для совместимости с новыми скриптами.',
  'Лечение сайта в случае заражения.',
]
</script>

<template>
  <div class="about">
    <section class="section about__hero">
      <div class="container about__hero-inner">
        <span class="eyebrow">о компании</span>
        <h1 class="about__title">17 лет опыта в разработке сайтов</h1>
        <p class="about__lead">
          Мы уже 17 лет на рынке, все наши дизайнеры и программисты обладают огромным опытом и
          внушительным портфолио.
        </p>
      </div>
    </section>

    <section class="section about__block">
      <div class="container about__grid">
        <h2 class="about__block-title">Эксклюзивный дизайн, а не шаблон</h2>
        <div class="about__block-text">
          <p>
            Сделаем Ваш старый сайт эксклюзивным, добавив фантазии, ярких красок, анимации и
            хорошего настроения! :) Воспроизведём Ваш сайт на удобной системе, где есть удобный
            редактор типа MS Word'а, массовая загрузка картинок, отличная система раскрутки и
            масса других полезных и удобных функций. Разрабатываем на BITRIX – JOOMLA – WORDPRESS.
          </p>
          <p>
            Мы не работаем по шаблонам (за исключением случаев, когда этого хочет сам клиент),
            наши дизайнеры — самые творческие люди, поэтому Ваш сайт будет действительно
            единственным в своём роде. Все работы ведутся с учётом фирменного стиля и требований
            клиента.
          </p>
        </div>
      </div>
    </section>

    <section class="section about__block about__block--alt">
      <div class="container about__grid">
        <h2 class="about__block-title">Витрина, которая продаёт</h2>
        <div class="about__block-text">
          <p>
            Мы проанализировали самые продающие сайты Москвы и Санкт-Петербурга, выявили их самые
            эффективные инструменты и разработали уникальный продукт — витрину, гарантированно
            повышающую прибыль с сайта в 5–10 раз.
          </p>
          <p>
            Наша витрина направлена на достижение 3-х целей: повышение имиджа Вашей компании,
            представление товара, подталкивание к действию. Все сайты, разработанные нами,
            направлены на активные продажи (имидж — товар — подталкивание к действию) и имеют
            удобную и эффективную структуру страницы.
          </p>
        </div>
      </div>
    </section>

    <section class="section about__block">
      <div class="container about__grid">
        <h2 class="about__block-title">Инструменты, которые выделяют вас среди конкурентов</h2>
        <div class="about__block-text">
          <p>
            Неограниченные возможности по расширению функционала — как внешнего, для клиентов, так
            и внутреннего, для администратора сайта.
          </p>
          <p>
            Огромный выбор дополнительных инструментов на сайт, выгодно выделяющих Вас на фоне
            конкурентов: маркетинговый опрос, книга отзывов, форма связи, новости с прокруткой,
            всплывающая фотогалерея (которую можно самостоятельно обновлять!) и многое другое.
          </p>
          <p>
            Комплексный подход к клиенту — от создания до поддержки и рекламы в Яндекс, VK, Avito.
            Дополнительная выгода от пользования нашим хостингом: домен + сервер + обслуживание.
          </p>
        </div>
      </div>
    </section>

    <section class="section about__block about__block--alt">
      <div class="container">
        <h2 class="about__block-title">Что входит в обслуживание в течение 1 года</h2>
        <ul class="about__list">
          <li v-for="item in serviceItems" :key="item" class="about__list-item">
            <span class="about__list-mark"><IconCheck /></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section about__block">
      <div class="container">
        <span class="eyebrow">подробнее по направлениям</span>
        <h2 class="about__block-title about__block-title--wide">Читайте детальнее о ключевых услугах</h2>
        <div class="about__articles">
          <router-link
            v-for="article in articles"
            :key="article.slug"
            :to="{ name: 'about-article', params: { slug: article.slug } }"
            class="article-card"
          >
            <h3 class="article-card__title">{{ article.title }}</h3>
            <p class="article-card__teaser">{{ article.teaser }}</p>
            <IconArrowRight class="article-card__arrow" />
          </router-link>
        </div>
      </div>
    </section>

    <section class="about__closing">
      <div class="container about__closing-inner">
        <p class="about__closing-text">
          Мы дорожим своими клиентами и всегда идём им навстречу, поэтому, заказывая услуги у нас,
          Вы гарантированно получите для себя качественный продукт по лучшим ценам в городе!
        </p>
        <BaseButton tag="router-link" :to="{ path: '/catalog' }" variant="primary">
          Смотреть услуги
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about__hero {
  border-bottom: 1px solid var(--border-color);
}
.about__hero-inner {
  max-width: 720px;
}
.about__title {
  font-size: var(--fs-h1);
  margin-top: var(--space-3);
}
.about__lead {
  margin-top: var(--space-3);
  color: var(--text-secondary);
  font-size: 1.05rem;
  max-width: 56ch;
}

.about__block--alt {
  background: var(--surface-alt);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-5);
}

.about__block-title {
  font-size: var(--fs-h2);
  max-width: 20ch;
}

.about__block-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  color: var(--text-secondary);
  max-width: 65ch;
}

.about__list {
  margin-top: var(--space-5);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-3);
}

.about__list-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-m);
  padding: var(--space-3);
  font-size: var(--fs-small);
  color: var(--text-primary);
}

.about__list-mark {
  color: var(--color-success);
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.about__block-title--wide {
  max-width: none;
}

.about__articles {
  margin-top: var(--space-5);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-3);
}

.article-card {
  position: relative;
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-l);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.article-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: var(--color-blueprint);
}

.article-card__title {
  font-size: 1rem;
  font-family: var(--font-display);
  padding-right: var(--space-4);
}

.article-card__teaser {
  font-size: var(--fs-small);
  color: var(--text-secondary);
}

.article-card__arrow {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 16px;
  height: 16px;
  color: var(--color-blueprint);
}

.about__closing {
  background: var(--color-ink);
  color: var(--color-paper);
}
.about__closing-inner {
  padding: var(--space-7) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-5);
  flex-wrap: wrap;
}
.about__closing-text {
  max-width: 50ch;
  font-size: 1.05rem;
}

@media (max-width: 760px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}
</style>
