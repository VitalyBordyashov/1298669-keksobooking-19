'use strict';
(function () {
  // в неавтивном режиме стаивм на поля disabled
  var arryInput = document.querySelectorAll('input, select');
  for (var i = 0; i < arryInput.length; i++) {
    arryInput[i].setAttribute('disabled', 'true');
  }
  // убираем .map--faded из блока map
  var createdItem = document.querySelector('.map');
  var markMap = document.querySelector('.map__pin--main');
  var addressField = document.querySelector('#address');
  addressField.setAttribute('value', '600' + ', ' + '400');
  var onMapremoval = function () {
    createdItem.classList.remove('map--faded');
    addressField.setAttribute('value', '600' + ', ' + '450');
  };
  markMap.addEventListener('mousedown', function (evt) {
    if (evt.which === 1) {
      onMapremoval();
      for (i = 0; i < arryInput.length; i++) {
        arryInput[i].removeAttribute('disabled');
      }
    }
  });
  markMap.addEventListener('keydown', function (evt) {
    if (evt.key === window.module32.ENTER_KEY) {
      onMapremoval();
      for (i = 0; i < arryInput.length; i++) {
        arryInput[i].removeAttribute('disabled');
      }
    }
  });
})();
