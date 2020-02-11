'use strict';
(function () {
// валидация выбора гостей и комнта
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var checkingGuestsRooms = function () {
    if (housingGuests.getAttribute(value) > 1) {
      var checkingRooms = function () {
        if (housingRooms.getAttribute(value) = 1) {
          housingRooms.setCustomValidity('Вы ввели число комнат менее количества гостей');
        }
      }
    }
  }
})();
