const professionalName = 'Emily Alvina';
const professionalRole = 'Nutricionista e Personal Trainer';
const professionalDescription = 'Ajudo mulheres e homens a criarem constância com treino, alimentação e rotina organizada, com acompanhamento mais próximo e uma estratégia simples de seguir.';
const aboutText1 = 'Minha proposta é te ajudar a sair da desorganização e construir uma rotina mais consistente, com treino, alimentação e acompanhamento adaptados à sua realidade.';
const aboutText2 = 'Aqui, o foco não é perfeição. É constância, leveza, clareza e evolução. Com um plano simples e acompanhamento próximo, você consegue manter o processo de forma sustentável.';
const whatsappNumber = '5563999999999';
const whatsappMessage = 'Olá! Vim pela sua landing page e quero saber mais sobre acompanhamento de treino e dieta.';
const instagramUrl = 'https://instagram.com/';

// Troque este caminho pela foto real da profissional quando tiver um arquivo JPG/PNG.
const profileImage = 'assets/profile-placeholder.svg';

const linksTreino = [
  {
    title: 'Treino ABC',
    description: 'Acesse a divisão do treino com organização por grupo muscular e rotina semanal.',
    url: '#'
  },
  {
    title: 'Treino em PDF',
    description: 'Versão em PDF para consultar facilmente no celular ou imprimir.',
    url: '#'
  },
  {
    title: 'Checklist semanal',
    description: 'Marque seu progresso e acompanhe sua constância durante a semana.',
    url: '#'
  },
  {
    title: 'Avaliação física',
    description: 'Espaço para formulário, ficha inicial ou material de acompanhamento.',
    url: '#'
  }
];

const linksTreinoDieta = [
  {
    title: 'Plano treino + dieta',
    description: 'Acesso ao material completo com treino e direcionamento alimentar.',
    url: '#'
  },
  {
    title: 'Cardápio semanal',
    description: 'Sugestão organizada para facilitar suas escolhas ao longo da semana.',
    url: '#'
  },
  {
    title: 'Lista de compras',
    description: 'Materiais úteis para deixar sua rotina mais prática e objetiva.',
    url: '#'
  },
  {
    title: 'Acompanhamento',
    description: 'Espaço reservado para evolução, metas, feedbacks ou check-ins.',
    url: '#'
  }
];

const contentMap = {
  treino: linksTreino,
  treinoDieta: linksTreinoDieta
};

function createWhatsAppLink(number, message) {
  const normalized = String(number).replace(/\D/g, '');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setHref(id, value) {
  const element = document.getElementById(id);
  if (element) element.href = value;
}

function setImage(id, value, alt) {
  const element = document.getElementById(id);
  if (element) {
    element.src = value;
    element.alt = alt;
  }
}

function renderLinks(tabKey) {
  const linksGrid = document.getElementById('linksGrid');
  const items = contentMap[tabKey] || [];

  linksGrid.innerHTML = items.map((item) => `
    <article class="link-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a class="btn btn-primary" href="${item.url}" target="_blank" rel="noopener noreferrer">Abrir material</a>
    </article>
  `).join('');
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;

      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      renderLinks(tab);
    });
  });
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => observer.observe(element));
}

function initializePage() {
  const whatsappLink = createWhatsAppLink(whatsappNumber, whatsappMessage);

  setText('brandName', professionalName);
  setText('brandRole', professionalRole);
  setText('heroName', professionalName);
  setText('heroRole', professionalRole);
  setText('heroDescription', professionalDescription);
  setText('aboutText1', aboutText1);
  setText('aboutText2', aboutText2);
  setText('footerName', professionalName);

  setHref('headerWhatsappButton', whatsappLink);
  setHref('heroWhatsappButton', whatsappLink);
  setHref('footerWhatsappButton', whatsappLink);
  setHref('floatingWhatsappButton', whatsappLink);
  setHref('footerInstagramLink', instagramUrl);

  setImage('profileImage', profileImage, `Foto de ${professionalName}`);

  renderLinks('treino');
  setupTabs();
  setupRevealAnimation();
}

document.addEventListener('DOMContentLoaded', initializePage);
