'use strict';
// закрытие объявления
(function () {
  var popupCard = document.querySelector('.map__card');
  var closeCard = popupCard.querySelector('.popup__close');
  closeCard.addEventListener('click', function(){
    popupCard.classList.add('hidden');
  })
})();

