'use strict';
(function () {
// валидация выбора гостей и комнта
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var isCorrect = function (guests, rooms) {
    if (Number(guests) > Number(rooms)) {
      return false;
    }
    return true;
  };
  housingRooms.addEventListener('change', function () {
    if (!isCorrect(housingGuests.value, housingRooms.value)) {
      housingRooms.setCustomValidity('Вы ввели число комнат менее количества гостей');
    }
  }
  );
})();
