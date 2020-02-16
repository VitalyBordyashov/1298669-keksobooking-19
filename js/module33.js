'use strict';
(function () {
  for (var i = 0; i < window.module32.arraNumbers.length; i++) {
    // эелемент клон из шаблона #card
    var templateCard = document.querySelector('#card').cloneNode(true);
    // в нем находим .popup__title и вставляем данные из 0-го элемента массива
    templateCard.content.querySelector('.popup__title').textContent = window.module32.arraNumbers[i].offer.title;
    templateCard.content.querySelector('.popup__text--address').textContent = window.module32.arraNumbers[i].offer.address;
    templateCard.content.querySelector('.popup__text--price').innerHTML = window.module32.arraNumbers[i].offer.price + '&#x20bd;' + '/ночь';

    var typeComparison = function () {
      if (window.module32.arraNumbers[i].offer.type === 'flat') {
        return 'Квартира';
      } else if (window.module32.arraNumbers[i].offer.type === 'palace') {
        return 'Дворец';
      } else if (window.module32.arraNumbers[i].offer.type === 'bungalo') {
        return 'Бунгало';
      } else if (window.module32.arraNumbers[i].offer.type === 'house') {
        return 'Дом';
      }
    };
    templateCard.content.querySelector('.popup__type').textContent = typeComparison(window.module32.arraNumbers[i].offer.type);
    templateCard.content.querySelector('.popup__text--capacity').textContent = window.module32.arraNumbers[i].offer.rooms + ' комнаты для ' + window.module32.arraNumbers[i].offer.guests + ' гостей';
    templateCard.content.querySelector('.popup__text--time').textContent = 'Заезд после ' + window.module32.arraNumbers[i].offer.checkin + ', выезд до ' + window.module32.arraNumbers[i].offer.checkout;
    templateCard.content.querySelector('.popup__features').textContent = window.module32.arrayConveniences;
    templateCard.content.querySelector('.popup__description').textContent = window.module32.arraNumbers[i].offer.description;

    var templateFhoto = templateCard.content.querySelector('.popup__photos');
    var copyTemplateFhoto = templateFhoto.querySelector('.popup__photo');
    copyTemplateFhoto.setAttribute('src', window.module32.arrayPhotos[i]);

    for (var x = 1; x < window.module32.arrayPhotos.length; x++) {
      var clone = copyTemplateFhoto.cloneNode(true);
      clone.setAttribute('src', window.module32.arrayPhotos[x]);
      templateFhoto.appendChild(clone);
    }
    templateCard.content.querySelector('.popup__avatar').setAttribute('src', window.module32.arraNumbers[i].author.avatar);
    document.querySelector('.map').insertBefore(templateCard.content, document.querySelector('.map__filters-container'));
  }
  var mapCard = document.querySelectorAll('.map .map__card');
  for (i = 0; i < window.module32.arraNumbers.length; i++) {
    mapCard[i].classList.add('hidden');
    mapCard[i].setAttribute('data_click', i);
  }
})();
