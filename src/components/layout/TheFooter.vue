<script setup>
import LogoMark from '../ui/LogoMark.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <LogoMark :size="36" variant="light" />
        <p class="footer__desc">
          Студия веб-разработки в Нижнем Новгороде.<br />
          Сайты, магазины, реклама, продвижение, хостинг.
        </p>
      </div>

      <div class="footer__col">
        <h3 class="footer__title">Компания</h3>
        <ul>
          <li><router-link to="/about">О нас</router-link></li>
          <li><router-link to="/catalog">Каталог услуг</router-link></li>
        </ul>
      </div>

      <div class="footer__col">
        <h3 class="footer__title">Услуги</h3>
        <ul>
          <li><router-link :to="{ path: '/catalog', query: { category: 'sites' } }">Сайты</router-link></li>
          <li><router-link :to="{ path: '/catalog', query: { category: 'shops' } }">Магазины</router-link></li>
          <li><router-link :to="{ path: '/catalog', query: { category: 'ads' } }">Реклама</router-link></li>
          <li><router-link :to="{ path: '/catalog', query: { category: 'promo' } }">Продвижение</router-link></li>
          <li><router-link :to="{ path: '/catalog', query: { category: 'hosting' } }">Хостинг</router-link></li>
        </ul>
      </div>

      <div class="footer__col footer__col--contacts">
        <h3 class="footer__title">Контакты</h3>
        <ul>
          <li>Нижний Новгород</li>
          <li class="footer__contact">
            <span class="footer__contact-label">Заказать сайт</span>
            <a href="tel:+79056611860" class="mono">+7 (905) 661-18-60</a>
            <span class="footer__hours mono">Пн–Вс 09:00–21:00</span>
          </li>
          <li class="footer__contact">
            <span class="footer__contact-label">Тех. поддержка / IT / СЕО</span>
            <a href="tel:+78314228559" class="mono">+7 (831) 422-85-59</a>
            <span class="footer__hours mono">Пн–Чт 09:00–18:00, Пт 10:00–16:00</span>
          </li>
          <li class="footer__contact">
            <span class="footer__contact-label">Дизайн / Каталоги</span>
            <a href="tel:+78314228599" class="mono">+7 (831) 422-85-99</a>
            <span class="footer__hours mono">Пн–Чт 09:00–18:00, Пт 10:00–16:00</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <span>© {{ year }} ВЕБРАЗРАБОТКА</span>
      <span class="mono">Информация на сайте не является публичной офертой <br>
                          Актуальные цены уточняйте у менеджеров</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-ink);
  color: var(--color-paper);
  margin-top: var(--space-7);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.7fr 0.8fr 1.3fr;
  gap: var(--space-5);
  padding: var(--space-6) 0 var(--space-5);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.footer__desc {
  color: rgba(245, 242, 236, 0.7);
  font-size: var(--fs-small);
  max-width: 26ch;
}

.footer__title {
  font-family: var(--font-mono);
  font-size: var(--fs-micro);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(245, 242, 236, 0.5);
  margin-bottom: var(--space-3);
}

.footer__col ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__col a,
.footer__col li {
  font-size: var(--fs-small);
  color: rgba(245, 242, 236, 0.85);
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-top: 0.3rem;
}

.footer__contact-label {
  font-size: var(--fs-micro);
  color: rgba(245, 242, 236, 0.5);
}

.footer__hours {
  font-size: var(--fs-micro);
  color: rgba(245, 242, 236, 0.45);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) 0 var(--space-5);
  border-top: 1px solid rgba(245, 242, 236, 0.12);
  font-size: var(--fs-micro);
  color: rgba(245, 242, 236, 0.5);
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 540px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
