// Элементы языка
const ruBtn = document.getElementById('ru-btn');
const uzBtn = document.getElementById('uz-btn');

// Элементы hero
const heroTitle = document.querySelector('h1');
const heroText = document.querySelector('p');
const heroBtnPrimary = document.querySelector('.hero-buttons .btn-primary');
const heroBtnSecondary = document.querySelector('.hero-buttons .btn-secondary');

// Элементы авторизации
const authBtnPrimary = document.querySelector('.auth-buttons .btn-primary');
const authBtnSecondary = document.querySelector('.auth-buttons .btn-secondary');

// Навигация
const navLinks = document.querySelectorAll('header nav a');

// Переводы
const translations = {
  ru: {
    nav: ['Главная', 'Как это работает', 'О нас', 'Контакты'],
    hero: {
      h1: 'Находи друзей и подруг для общего времяпровождения',
      p: 'JustGo — сервис для тех, кто не хочет проводить время в одиночку. Совместные пробежки, походы, спорт, концерты, путешествия и многое другое.',
      btnPrimary: 'Создать ветку',
      btnSecondary: 'Присоединиться'
    },
    auth: ['Регистрация', 'Войти']
  },
  uz: {
    nav: ['Bosh sahifa', 'Qanday ishlaydi', 'Biz haqimizda', 'Kontaktlar'],
    hero: {
      h1: 'Do‘stlar va hamkorlar bilan vaqtni birga o‘tkazing',
      p: 'JustGo — yolg‘iz vaqt o‘tkazishni istamaydiganlar uchun xizmat. Birgalikda yugurishlar, sayohatlar, sport, konsertlar, sayohatlar va boshqa ko‘plab imkoniyatlar.',
      btnPrimary: 'Tarmoqlar yaratish',
      btnSecondary: 'Qo‘shilish'
    },
    auth: ['Ro‘yxatdan o‘tish', 'Kirish']
  }
};

// Функция смены текста с анимацией
function changeTextWithFade(element, newText) {
  element.classList.add('hidden');
  setTimeout(() => {
    element.textContent = newText;
    element.classList.remove('hidden');
  }, 300);
}

// Смена языка
function switchLanguage(lang) {
  if (lang === 'ru') {
    ruBtn.classList.add('active');
    uzBtn.classList.remove('active');
  } else {
    uzBtn.classList.add('active');
    ruBtn.classList.remove('active');
  }

  // Hero
  changeTextWithFade(heroTitle, translations[lang].hero.h1);
  changeTextWithFade(heroText, translations[lang].hero.p);
  changeTextWithFade(heroBtnPrimary, translations[lang].hero.btnPrimary);
  changeTextWithFade(heroBtnSecondary, translations[lang].hero.btnSecondary);

  // Auth
  changeTextWithFade(authBtnPrimary, translations[lang].auth[0]);
  changeTextWithFade(authBtnSecondary, translations[lang].auth[1]);

  // Navbar
  navLinks.forEach((link, i) => {
    changeTextWithFade(link, translations[lang].nav[i]);
  });
}

// События смены языка
ruBtn.addEventListener('click', () => switchLanguage('ru'));
uzBtn.addEventListener('click', () => switchLanguage('uz'));

// Плавный скролл страницы с инерцией
const ease = 0.09; // меньше — медленнее
let current = 0;
let target = 0;

const wrapper = document.getElementById('wrapper');

window.addEventListener('wheel', (e) => {
  // Игнорируем скролл, если колесо над лентой
  if (e.target.closest('.feed')) return;

  target += e.deltaY;
  const maxScroll = wrapper.scrollHeight - window.innerHeight;
  if (target < 0) target = 0;
  if (target > maxScroll) target = maxScroll;
});

function smoothScroll() {
  current += (target - current) * ease;
  wrapper.style.transform = `translateY(${-Math.round(current)}px)`;
  requestAnimationFrame(smoothScroll);
}

smoothScroll();

// Лента
const feed = document.querySelector('.feed');

feed.addEventListener('mouseenter', () => {
  document.body.style.overflow = 'hidden';
});

feed.addEventListener('mouseleave', () => {
  document.body.style.overflow = '';
});

feed.addEventListener('wheel', (e) => {
  const delta = e.deltaY;
  const up = delta < 0 && feed.scrollTop === 0;
  const down = delta > 0 && feed.scrollTop + feed.clientHeight >= feed.scrollHeight;
  if (up || down) e.preventDefault();
}, { passive: false });

// Кнопка «Смотреть всю ленту»
const seeMoreBtn = document.querySelector('.see-more-btn');
seeMoreBtn.addEventListener('click', () => {
  window.location.href = '/feed.html';
});

// Кнопка Наверх
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollToTop');

  function updateScrollBtn() {
    // показываем кнопку, если текущий скролл больше 300px
    scrollBtn.style.display = current > 300 ? 'block' : 'none';
    requestAnimationFrame(updateScrollBtn);
  }

  scrollBtn.addEventListener('click', () => {
    target = 0;
  });

  updateScrollBtn();
});
