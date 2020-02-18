'use strict';
// валидация времени заезда/выезда
(function () {
  var timein = document.querySelector('#timein').options;
  var timeout = document.querySelector('#timeout').options;
  var timeinChangeHandler = function () {
    for (var i = 0; i < timein.length; i++) {
      if (timein[i].text === 'После 12') {
      timeout[i].options.text = 'Выезд до 12';
    } else if (timein[i].options.text === 'После 13') {
      timeout[i].options.text = 'Выезд до 13';
    } else if (timein[i].options.text === 'После 14') {
      timeout[i].options.text = 'Выезд до 14';
    }
    }
  };
  var timeoutChangeHandler = function () {
    if (timeout.options.value === 'Выезд до 12') {
      timein.setAttribute('value', 'Выезд до 12');
    } else if (timeout.options.options.value === 'Выезд до 13') {
      timein.setAttribute('value', 'После 13');
    } else if (timeout.options.value === 'Выезд до 14') {
      timein.setAttribute('value', 'После 14');
    }
  }

  timein.addEventListener('change', timeinChangeHandler);
  timeout.addEventListener('change', timeoutChangeHandler);
})();
