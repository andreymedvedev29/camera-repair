const popupMenu = document.querySelector('.popup-menu'); 

function openPopup(el) {             
    el.classList.add('popup-menu_opened');
  };
  function closePopup(el) {            
    el.classList.remove('popup-menu_opened');
  };


const burgMenu = document.querySelector('.header__burg-menu');
const closeMenu = popupMenu.querySelector('.popup-menu__close-button'); 
burgMenu.addEventListener('click', function () {                        
  openPopup(popupMenu);
});
closeMenu.addEventListener('click', function () {               
  closePopup(popupMenu);
});