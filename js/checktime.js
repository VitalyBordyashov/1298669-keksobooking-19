'use strict';
// валидация времени заезда/выезда
(function () {
  var timein = document.querySelector('#timein');
  var timeout = document.querySelector('#timeout');
  timein.addEventListener('change', function () {
    timeout.value = timein.value;  
  });
  timeout.addEventListener('change', function () {
    timein.value = timeout.value;  
  });
})();
