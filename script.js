// 🌙 Түнгі режим (сол қалпында)
const toggleBtn = document.createElement('button');
toggleBtn.className = 'theme-toggle';
toggleBtn.textContent = '🌙';
document.body.appendChild(toggleBtn);

function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}
setTheme(localStorage.getItem('theme') === 'dark');
toggleBtn.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));

// 🔍 Іздеу
const searchInput = document.querySelector('#search');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = title.includes(query) ? 'block' : 'none';
    });
  });
}

// 💫 Скролл анимациясы
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) card.classList.add('visible');
  });
});

// 🪄 Карточка ашылып/жабылатын анимация
document.querySelectorAll('.card').forEach(card => {
  // Аңыздың қысқаша мәтінінен кейін қосымша <div class="details"> бөлігі болу керек
  const details = document.createElement('div');
  details.classList.add('details');
  details.innerHTML = `<p>${card.querySelector('p').textContent}</p>`;
  card.appendChild(details);

  // Қысқаша мәтін тек тақырыптан кейін қалады
  const shortText = card.querySelector('p');
  shortText.textContent = "Толығырақ оқу үшін басыңыз...";

  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});
