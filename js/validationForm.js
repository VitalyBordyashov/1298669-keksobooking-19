'use strict';
// валидация типа жилья и цены
(function () {
  var typeHousing = document.querySelector('#type');
  var costHousing = document.querySelector('#price');
  var selectChangeHandler = function () {
    if (typeHousing.value === 'Бунгало') {
      costHousing.setAttribute('min', '0');
      costHousing.setAttribute('placeholder', '0');
    } else if (typeHousing.value === 'Квартира') {
      costHousing.setAttribute('min', '1000');
      costHousing.setAttribute('placeholder', '1000');
      if (costHousing.value < 1000) {
        costHousing.setCustomValidity('Минимальная цена за квартиру 1000');
      }
    } else if (typeHousing.value === 'Дом') {
      costHousing.setAttribute('min', '5000');
      costHousing.setAttribute('placeholder', '5000');
      if (costHousing.value < 5000) {
        costHousing.setCustomValidity('Минимальная цена за дом 5000');
      }
    } else if (typeHousing.value === 'Дворец') {
      costHousing.setAttribute('min', '10000');
      costHousing.setAttribute('placeholder', '10000');
      if (costHousing.value < 10000) {
        costHousing.setCustomValidity('Минимальная цена за дворец 10000');
      }
    }
  }
  typeHousing.addEventListener('change', selectChangeHandler);
  costHousing.addEventListener('change', selectChangeHandler);
})();
