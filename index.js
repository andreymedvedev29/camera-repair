const popupMenu = document.querySelector('.popup-menu');

function openPopup(popupElement) {             
    popupElement.classList.add('popup-menu_opened');
  };
  function closePopup(popupElement) {            
    popupElement.classList.remove('popup-menu_opened');
  };


const burgMenu = document.querySelector('.header__burg-menu');//находим кнопку редактирования профиля
const closeMenu = popupMenu.querySelector('.popup-menu__close-button'); //находим кнопку закрытия попапа профиля
burgMenu.addEventListener('click', function () {                //на кнопку редактирования профиля вешаем функцию открытия попапа            
  openPopup(popupMenu);
});
closeMenu.addEventListener('click', function () {               //на кнопку закрытия профиля вешаем функцию закрытия попапа
  closePopup(popupMenu);
});