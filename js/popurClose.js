'use strict';
(function () {
  var popupCard = document.querySelector('.map');
  var closeCard = popupCard.querySelector('.popup__close');
  closeCard.addEventListener('click', function(){
    popupCard.classList.add('hidden');
  })
})();
