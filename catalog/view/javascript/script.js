// Mobile menu
console.log("Файл script.js успешно подключён!");

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header-menu'),
  menuItem = document.querySelectorAll('header-menu__item'),
  hamburger = document.querySelector('.menu-mob');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-mob__active');
    menu.classList.toggle('header-menu__active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('menu-mob__active');
      menu.classList.toggle('header-menu__active');
    })
  })
})
// Mobile menu end

// Search start
const openSearch = document.getElementById('openSearch');
const closeSearch = document.getElementById('closeSearch');
const searchPopup = document.getElementById('searchPopup');

// Открытие поиска
openSearch.addEventListener('click', () => {
  searchPopup.style.display = 'flex';
});

// Закрытие поиска
closeSearch.addEventListener('click', () => {
  searchPopup.style.display = 'none';
});

// Закрытие по клику вне области окна
window.addEventListener('click', (event) => {
  if (event.target === searchPopup) {
    searchPopup.style.display = 'none';
  }
});
// Search end



