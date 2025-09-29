const ruBtn = document.getElementById('ru-btn');
const uzBtn = document.getElementById('uz-btn');

ruBtn.addEventListener('click', () => {
  ruBtn.classList.add('active');
  uzBtn.classList.remove('active');
  document.querySelector('h1').textContent = 'Находи друзей и подруг для общего времяпровождения';
  document.querySelector('p').textContent = 'JustGo — сервис для тех, кто не хочет проводить время в одиночку. Совместные пробежки, походы, спорт, концерты, путешествия и многое другое.';
  document.querySelector('.hero-buttons .btn-primary').textContent = 'Создать ветку';
  document.querySelector('.hero-buttons .btn-secondary').textContent = 'Присоединиться';
  document.querySelector('.auth-buttons .btn-primary').textContent = 'Регистрация';
  document.querySelector('.auth-buttons .btn-secondary').textContent = 'Войти';
});

uzBtn.addEventListener('click', () => {
  uzBtn.classList.add('active');
  ruBtn.classList.remove('active');
  document.querySelector('h1').textContent = 'Do‘stlar va hamkorlar bilan vaqtni birga o‘tkazing';
  document.querySelector('p').textContent = 'JustGo — yolg‘iz vaqt o‘tkazishni istamaydiganlar uchun xizmat. Birgalikda yugurishlar, sayohatlar, sport, konsertlar, sayohatlar va boshqa ko‘plab imkoniyatlar.';
  document.querySelector('.hero-buttons .btn-primary').textContent = 'Tarmoqlar yaratish';
  document.querySelector('.hero-buttons .btn-secondary').textContent = 'Qo‘shilish';
  document.querySelector('.auth-buttons .btn-primary').textContent = 'Ro‘yxatdan o‘tish';
  document.querySelector('.auth-buttons .btn-secondary').textContent = 'Kirish';
});
