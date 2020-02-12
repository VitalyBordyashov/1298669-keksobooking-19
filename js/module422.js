'use strict';
(function () {
// валидация выбора гостей и комнта
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var isCorrect = function (guests, rooms) {
    if (guests > rooms) {
      return false
    }
    return true
  };
  housingGuests.addEventListener('change', function (evt) {
    if (!isCorrect(evt.target.value, housingRooms.getAttribute(value))) {
      housingRooms.setCustomValidity('Вы ввели число комнат менее количества гостей');
    }
  }
  );
})();
