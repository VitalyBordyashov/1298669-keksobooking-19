'use strict';
(function () {
  // эелемент клон из шаблона #card
  var templateCard = document.querySelector('#card').cloneNode(true);
  // в нем находим .popup__title и вставляем данные из 0-го элемента массива
  templateCard.content.querySelector('.popup__title').textContent = window.module32.arraNumbers[0].offer.title;
  templateCard.content.querySelector('.popup__text--address').textContent = window.module32.arraNumbers[0].offer.address;
  templateCard.content.querySelector('.popup__text--price').textContent = window.module32.arraNumbers[0].offer.price + ' Rub' + '/ночь';

  var typeComparison = function () {
    if (window.module32.arraNumbers[0].offer.type === 'flat') {
      return 'Квартира';
    } else if (window.module32.arraNumbers[0].offer.type === 'palace') {
      return 'Дворец';
    } else if (window.module32.arraNumbers[0].offer.type === 'bungalo') {
      return 'Бунгало';
    } else if (window.module32.arraNumbers[0].offer.type === 'house') {
      return 'Дом';
    }
  };
  templateCard.content.querySelector('.popup__type').textContent = typeComparison(window.module32.arraNumbers[0].offer.type);
  templateCard.content.querySelector('.popup__text--capacity').textContent = window.module32.arraNumbers[0].offer.rooms + ' комнаты для ' + window.module32.arraNumbers[0].offer.guests + ' гостей';
  templateCard.content.querySelector('.popup__text--time').textContent = 'Заезд после ' + window.module32.arraNumbers[0].offer.checkin + ', выезд до ' + window.module32.arraNumbers[0].offer.checkout;
  templateCard.content.querySelector('.popup__features').textContent = window.module32.arrayConveniences;
  templateCard.content.querySelector('.popup__description').textContent = window.module32.arraNumbers[0].offer.description;
  var templateFhoto = templateCard.content.querySelector('.popup__photos');
  for (var i = 0; i < window.module32.arrayPhotos.length; i++) {
    // переменная для хранения копий шаблонов объектов
    var copyTemplateFhoto = templateFhoto.querySelector('img').cloneNode(true);
    copyTemplateFhoto.setAttribute('src', window.module32.arrayPhotos[i]);
  }
  templateCard.content.querySelector('.popup__avatar').setAttribute('src', window.module32.arraNumbers[0].author.avatar);

  document.querySelector('.map').appendChild(templateCard.content);
})();
