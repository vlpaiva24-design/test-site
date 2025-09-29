// Элементы
const ruBtn = document.getElementById('ru-btn');
const uzBtn = document.getElementById('uz-btn');

const heroTitle = document.querySelector('h1');
const heroText = document.querySelector('p');
const heroBtnPrimary = document.querySelector('.hero-buttons .btn-primary');
const heroBtnSecondary = document.querySelector('.hero-buttons .btn-secondary');
const authBtnPrimary = document.querySelector('.auth-buttons .btn-primary');
const authBtnSecondary = document.querySelector('.auth-buttons .btn-secondary');
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
  }, 300); // совпадает с transition в CSS
}

// Универсальная функция смены языка
function switchLanguage(lang) {
  // Кнопки активного состояния
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

// События
ruBtn.addEventListener('click', () => switchLanguage('ru'));
uzBtn.addEventListener('click', () => switchLanguage('uz'));
