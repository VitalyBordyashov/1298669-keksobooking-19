'use strict';
// обработчик клика на метку
(function () {
  var mapPins = document.querySelector('.map__pins');
  var popupCard = document.querySelector('.map__card');
  mapPins.addEventListener('click', function (evt) {
    if (evt.target.nodeName != 'BUTTON') {
      var ParentTarget = evt.target.parentNode;
    } else {
      ParentTarget = evt.target;
    }
    if (ParentTarget.hasAttribute('data_click')) {
      var dataClick = ParentTarget.getAttribute('data_click');
      var mapCard = document.querySelectorAll('.map .map__card');
      for (var i = 0; i < mapCard.length; i++) {
        mapCard[i].classList.add('hidden');
      }
      document.querySelector('article[data_click="'+dataClick+'"]').classList.remove('hidden');
    }
});
})();
