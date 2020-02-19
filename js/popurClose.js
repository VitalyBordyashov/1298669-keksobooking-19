'use strict';
// обработчик клика на метку
(function () {
  var map = document.querySelector('.map');
  map.addEventListener('click', function (evt) {
    if (evt.target.className === 'popup__close') {
      var ParentTarget = evt.target.parentNode;
      ParentTarget.classList.add('hidden');
    } else false;
  });
  map.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter'||evt.key === 'Escape') {
      var mapCard = document.querySelectorAll('.map__card');
      for (var i = 0; i < mapCard.length; i++) {
        mapCard[i].classList.add('hidden');
      }
    }
  });
})();

