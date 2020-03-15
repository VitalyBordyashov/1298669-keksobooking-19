'use strict';
(function () {
 var arraNumbers = [];
 var URL = 'https://js.dump.academy/keksobooking/data';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };

  var successHandler = function (pins) {

    arraNumbers = pins;

    var template = document.querySelector('#pin');
    for (var i = 0; i < arraNumbers.length; i++) {
      // переменная для хранения копий шаблонов объектов
      var copyTemplate = template.content.querySelector('button').cloneNode(true);
      copyTemplate.style = 'left:' + (arraNumbers[i].location.x + 200) + 'px;' + 'top:' + (arraNumbers[i].location.y + 200) + 'px;';
      copyTemplate.querySelector('img').setAttribute('src', arraNumbers[i].author.avatar);
      copyTemplate.querySelector('img').setAttribute('alt', arraNumbers[i].title);
      document.querySelector('.map__pins').appendChild(copyTemplate);
    }
    var mapPins = document.querySelector('.map__pins');
    var mapPin = mapPins.querySelectorAll('.map__pin');
    for (i = 0; i < mapPin.length; i++) {
      if (!mapPin[i].classList.contains('map__pin--main')) {
        mapPin[i].setAttribute('data_click', i-1);
      }
    }
    for (var i = 0; i < arraNumbers.length; i++) {
    // эелемент клон из шаблона #card
    var templateCard = document.querySelector('#card').cloneNode(true);
    // в нем находим .popup__title и вставляем данные из 0-го элемента массива
    templateCard.content.querySelector('.popup__title').textContent = arraNumbers[i].offer.title;
    templateCard.content.querySelector('.popup__text--address').textContent = arraNumbers[i].offer.address;
    templateCard.content.querySelector('.popup__text--price').innerHTML = arraNumbers[i].offer.price + '&#x20bd;' + '/ночь';

    var typeComparison = function () {
      if (arraNumbers[i].offer.type === 'flat') {
        return 'Квартира';
      } else if (arraNumbers[i].offer.type === 'palace') {
        return 'Дворец';
      } else if (arraNumbers[i].offer.type === 'bungalo') {
        return 'Бунгало';
      } else if (arraNumbers[i].offer.type === 'house') {
        return 'Дом';
      }
    };
    templateCard.content.querySelector('.popup__type').textContent = typeComparison(arraNumbers[i].offer.type);
    templateCard.content.querySelector('.popup__text--capacity').textContent = arraNumbers[i].offer.rooms + ' комнаты для ' + arraNumbers[i].offer.guests + ' гостей';
    templateCard.content.querySelector('.popup__text--time').textContent = 'Заезд после ' + arraNumbers[i].offer.checkin + ', выезд до ' + arraNumbers[i].offer.checkout;
    templateCard.content.querySelector('.popup__features').textContent = arraNumbers[i].offer.features;
    templateCard.content.querySelector('.popup__description').textContent = arraNumbers[i].offer.description;

    var templateFhoto = templateCard.content.querySelector('.popup__photos');
    var copyTemplateFhoto = templateFhoto.querySelector('.popup__photo');
    copyTemplateFhoto.setAttribute('src', arraNumbers[i].offer.photos);

    for (var x = 1; x < arraNumbers.length; x++) {
      var clone = copyTemplateFhoto.cloneNode(true);
      clone.setAttribute('src', arraNumbers[i].offer.photos);
      templateFhoto.appendChild(clone);
    }
    templateCard.content.querySelector('.popup__avatar').setAttribute('src', arraNumbers[i].author.avatar);
    document.querySelector('.map').insertBefore(templateCard.content, document.querySelector('.map__filters-container'));
  }
  var mapCard = document.querySelectorAll('.map .map__card');
  for (i = 0; i < arraNumbers.length; i++) {
    mapCard[i].classList.add('hidden');
    mapCard[i].setAttribute('data_click', i);
  }
  };

  var errorHandler = function (errorMessage) {
  };

  window.load(successHandler, errorHandler);
})();
