import './styles.css';
import { siteContent } from './content.js';

const app = document.querySelector('#app');

const iconArrow = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
`;

function renderTopicCard(topic) {
  return `
    <article class="topic-card" data-topic="${topic.id}">
      <div class="topic-card__top">
        <span class="topic-card__number">${topic.number}</span>
        <span class="topic-card__category">${topic.category}</span>
      </div>
      <div class="topic-card__body">
        <h3>${topic.title}</h3>
        <p>${topic.short}</p>
      </div>
      <button class="topic-card__button" type="button" data-open-topic="${topic.id}" aria-label="Abrir orientações sobre ${topic.title}">
        <span>Ver orientações</span>
        ${iconArrow}
      </button>
    </article>
  `;
}

function renderChecklistItem(item, index) {
  return `
    <li>
      <span>${String(index + 1).padStart(2, '0')}</span>
      <p>${item}</p>
    </li>
  `;
}

function renderExternalButtons(buttons = []) {
  if (!buttons.length) return '';

  return `
    <div class="modal__actions">
      ${buttons.map((button) => `
        <a class="action-button" href="${button.href}" ${button.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          ${button.label}
        </a>
      `).join('')}
    </div>
  `;
}

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Ir para o início">
      <img src="./assets/logo-decc.png" alt="" />
      <span>Segurança Digital</span>
    </a>
    <nav class="desktop-nav" aria-label="Navegação principal">
      <a href="#temas">Temas</a>
      <a href="#orientacoes">Orientações</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero__glow hero__glow--one"></div>
      <div class="hero__glow hero__glow--two"></div>
      <div class="hero__circuit" aria-hidden="true"></div>
      <div class="hero__content container">
        <p class="eyebrow">${siteContent.hero.eyebrow}</p>
        <h1>${siteContent.hero.title}</h1>
        <p class="hero__text">${siteContent.hero.text}</p>
        <a class="primary-link" href="#temas">
          <span>Consultar temas</span>
          ${iconArrow}
        </a>
      </div>
      <div class="hero__mark" aria-hidden="true">
        <img src="./assets/logo-decc.png" alt="" />
      </div>
    </section>

    <section class="topics section" id="temas">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">TEMAS</p>
            <h2>Informação rápida para situações digitais comuns.</h2>
          </div>
          <p>Selecione um tema para ver sinais de alerta e providências recomendadas.</p>
        </div>
        <div class="topic-grid">
          ${siteContent.topics.map(renderTopicCard).join('')}
        </div>
      </div>
    </section>

    <section class="checklist section" id="orientacoes">
      <div class="container checklist__layout">
        <div class="checklist__intro">
          <p class="eyebrow">PROVIDÊNCIAS</p>
          <h2>O que preservar quando algo acontece.</h2>
          <p>Em situações digitais, agir rápido é importante, mas preservar as informações antes de excluir, bloquear ou resetar dispositivos pode ser decisivo.</p>
        </div>
        <ol class="checklist__list">
          ${siteContent.checklist.map(renderChecklistItem).join('')}
        </ol>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container site-footer__inner">
      <span>Segurança Digital</span>
      <span>Conteúdo informativo.</span>
    </div>
  </footer>

  <dialog class="modal" id="topic-modal" aria-labelledby="modal-title">
    <div class="modal__shell">
      <button class="modal__close" type="button" aria-label="Fechar">×</button>
      <div class="modal__content" id="modal-content"></div>
    </div>
  </dialog>
`;

const modal = document.querySelector('#topic-modal');
const modalContent = document.querySelector('#modal-content');
const closeButton = document.querySelector('.modal__close');

function openTopic(topicId) {
  const topic = siteContent.topics.find((item) => item.id === topicId);
  if (!topic) return;

  modalContent.innerHTML = `
    <div class="modal__meta">
      <span>${topic.number}</span>
      <span>${topic.category}</span>
    </div>
    <h2 id="modal-title">${topic.title}</h2>
    <section class="modal__section">
      <h3>O que é</h3>
      <p>${topic.what}</p>
    </section>
    <section class="modal__section">
      <h3>Sinais de alerta</h3>
      <ul>${topic.signs.map((item) => `<li>${item}</li>`).join('')}</ul>
    </section>
    <section class="modal__section modal__section--highlight">
      <h3>O que fazer</h3>
      <ul>${topic.actions.map((item) => `<li>${item}</li>`).join('')}</ul>
    </section>
    ${renderExternalButtons(topic.buttons)}
  `;

  modal.showModal();
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.close();
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-open-topic]');
  if (trigger) openTopic(trigger.dataset.openTopic);
});

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

modal.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
});
