'use strict';
// обработчик клика на метку
(function () {
  mapPins.addEventListener('click', function (evt) {
    if (evt.target.hasAttribute('data_click')) {
      var dataClick = evt.target.getAttribute('data_click');
      popupCard.querySelector('article[data_click="dataClick"]').classList.remove('hidden');
    }
});
})();
