'use strict';
(function () {
  var popupCard = document.querySelector('map__card popup');
  var closeCard = templateCard.querySelector('.popup__close');
  closeCard.addEventListener('click', function (){
    popupCard.classList.add('hidden');
  })
})();
