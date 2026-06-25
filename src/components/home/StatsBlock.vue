<script setup>
const stats = [
  { value: '16', prefix: null, label: 'лет на рынке' },
  { value: '1000', prefix: 'более', label: 'сайтов на поддержке' },
  { value: '2000', prefix: 'более', label: 'рекламных кампаний' },
  { value: '2500', prefix: 'более', label: 'созданных сайтов' },
]
</script>

<template>
  <section class="section stats">
    <span class="stats__watermark" aria-hidden="true">О КОМПАНИИ</span>

    <div class="container stats__inner">
      <span class="eyebrow">мы в цифрах</span>

      <dl class="stats__grid">
        <div v-for="s in stats" :key="s.label" class="stats__item">
          <div class="stats__number">
            <span v-if="s.prefix" class="stats__prefix mono">{{ s.prefix }}</span>
            <dt>{{ s.value }}</dt>
          </div>
          <dd>{{ s.label }}</dd>
        </div>
      </dl>

      <div class="stats__text">
        <p>
          Более 2500 сайтов, созданных компанией Вебразработка за 16 лет работы, — это
          маркетинговый подход с продуманными инструментами для увеличения продаж. Предлагаем
          супервыгодное предложение — пакеты «всё включено». Цена сайтов нашей компании в разы
          ниже, чем у конкурентов, при приобретении пакета. Порой скидки доходят до 40 процентов.
          Большинство пакетов включают заполнение каталогов, хостинг и рекламу в Яндекс.
        </p>
        <p>
          Работа с нами — это всегда выгодные цены и подарки при любом заказе. В любом случае
          разработанные нами сайты будут выглядеть эксклюзивно, отличать Вас от конкурентов. Все
          сайты снабжены функциональной анимацией. В течение 16 лет мы разработали десятки
          различных инструментов для увеличения Вашей прибыли. Это значит, что даже недорогие
          сайты будут интенсивно привлекать клиентов. Их смело можно рекламировать и продвигать.
          Мы используем психологические методы воздействия на посетителей сайтов, чтобы
          подталкивать их к контакту. При необходимости мы пишем уникальные маркетинговые тексты
          под конкретные фразы. Тысячи фраз выведены нашей компанией в топ-10 за 16 лет работы.
          Просим ознакомиться с пакетными предложениями на сайты ниже. Для клиентов, работающих с
          нашей компанией по рекламе в Яндекс и Гугл, мы на постоянной основе проводим бесплатное
          АБ-тестирование сайта с целью повысить его прибыльность.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  position: relative;
  background: var(--color-ink);
  color: var(--color-paper);
  overflow: hidden;
}

.stats__watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: clamp(4rem, 16vw, 11rem);
  font-weight: 800;
  color: rgba(245, 242, 236, 0.04);
  white-space: nowrap;
  pointer-events: none;
  letter-spacing: 0.02em;
}

.stats__inner {
  position: relative;
  z-index: 1;
}

.stats .eyebrow {
  color: var(--color-signal);
}
.stats .eyebrow::before {
  background: var(--color-signal);
}

.stats__grid {
  margin-top: var(--space-6);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-5);
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.stats__number {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  width: fit-content;
}

.stats__number dt {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 6vw, 3.6rem);
  font-weight: 800;
  line-height: 1;
  color: var(--color-paper);
}

.stats__prefix {
  position: absolute;
  top: -0.6rem;
  left: -0.4rem;
  background: var(--color-signal);
  color: var(--color-ink);
  font-size: var(--fs-micro);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-pill);
  transform: rotate(-6deg);
  z-index: 2;
  white-space: nowrap;
}

.stats__item dd {
  margin: 0;
  font-size: var(--fs-small);
  color: rgba(245, 242, 236, 0.6);
}

.stats__text {
  margin-top: var(--space-7);
  max-width: 70ch;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  color: rgba(245, 242, 236, 0.65);
  font-size: var(--fs-small);
  line-height: 1.6;
  border-top: 1px solid rgba(245, 242, 236, 0.12);
  padding-top: var(--space-5);
}
</style>
