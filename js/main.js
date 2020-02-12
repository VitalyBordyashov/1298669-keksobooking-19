'use strict';
var ENTER_KEY = 'Enter';
// массив для объектов
var arraNumbers = [];
var arrayValues = ['palace', 'flat', 'house', 'bungalo'];
var arrTime = ['12:00', '13:00', '14:00'];
var arrayConveniences = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
var arrayPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
// функция случайного числа
var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};
// функция возвращения числа 01-08
var getNumberWithZerro = function () {
  return '0' + getRandomNumber(8);
};
// функция вывода массива случайной длины из предложенных
var randomArray = function (array) {
  var emptyArray = [];
  for (var i = 0; i < getRandomNumber(array.length); i++) {
    emptyArray.push(array[getRandomNumber(array.length - 1)]);
  }
  return emptyArray;
};
// генератор строки(текста)
var stringGenerator = function (len) {
  var chrs = 'ячсмитьбюфывапролджэйцукенгшщзхъЯЧСМИТЬБЮФЫВАПРОЛДЖЭЙЦУКЕНГШЩЗ0123456789 ,.';
  var str = '';
  for (var i = 0; i < len; i++) {
    var pos = getRandomNumber(chrs.length);
    str += chrs.substring(pos, pos + 1);
  }
  return str;
};

var generatingObject = function () {
  return {
    author: {
      avatar: 'img/avatars/user' + getNumberWithZerro() + '.png'
    },
    offer: {
      title: stringGenerator(100),
      address: getRandomNumber(600) + ', ' + getRandomNumber(350),
      price: getRandomNumber(1000),
      type: arrayValues[getRandomNumber(arrayValues.length)],
      rooms: getRandomNumber(10),
      guests: getRandomNumber(4),
      checkin: arrTime[getRandomNumber(arrTime.length)],
      checkout: arrTime[getRandomNumber(arrTime.length)],
      features: randomArray(arrayConveniences),
      description: stringGenerator(100),
      photos: randomArray(arrayPhotos),
    },
    location: {
      x: getRandomNumber(500),
      y: getRandomNumber(400),
    },
  };
};
var arrayCreation = function () {
  for (var i = 1; i <= 8; i++) {
    arraNumbers.push(generatingObject());
  }
};
arrayCreation();

// 3 пункт
// объявляем функцию создания эелемента DOM
var creatingItem = function (value) {
  return document.querySelector(value);
};
var template = creatingItem('#pin');
for (var i = 0; i < arraNumbers.length; i++) {
  // переменная для хранения копий шаблонов объектов
  var copyTemplate = template.content.querySelector('button').cloneNode(true);
  copyTemplate.style = 'left:' + (arraNumbers[i].location.x + 200) + 'px;' + 'top:' + (arraNumbers[i].location.y + 200) + 'px;';
  copyTemplate.querySelector('img').setAttribute('src', arraNumbers[i].author.avatar);
  copyTemplate.querySelector('img').setAttribute('alt', arraNumbers[i].title);
  creatingItem('.map__pins').appendChild(copyTemplate);
}
// эелемент клон из шаблона #card
var templateCard = creatingItem('#card').cloneNode(true);
// в нем находим .popup__title и вставляем данные из 0-го элемента массива
templateCard.content.querySelector('.popup__title').textContent = arraNumbers[0].offer.title;
templateCard.content.querySelector('.popup__text--address').textContent = arraNumbers[0].offer.address;
templateCard.content.querySelector('.popup__text--price').textContent = arraNumbers[0].offer.price + ' Rub' + '/ночь';

var typeComparison = function () {
  if (arraNumbers[0].offer.type === 'flat') {
    return 'Квартира';
  } else if (arraNumbers[0].offer.type === 'palace') {
    return 'Дворец';
  } else if (arraNumbers[0].offer.type === 'bungalo') {
    return 'Бунгало';
  } else if (arraNumbers[0].offer.type === 'house') {
    return 'Дом';
  }
};
templateCard.content.querySelector('.popup__type').textContent = typeComparison(arraNumbers[0].offer.type);
templateCard.content.querySelector('.popup__text--capacity').textContent = arraNumbers[0].offer.rooms + ' комнаты для ' + arraNumbers[0].offer.guests + ' гостей';
templateCard.content.querySelector('.popup__text--time').textContent = 'Заезд после ' + arraNumbers[0].offer.checkin + ', выезд до ' + arraNumbers[0].offer.checkout;
templateCard.content.querySelector('.popup__features').textContent = arrayConveniences;
templateCard.content.querySelector('.popup__description').textContent = arraNumbers[0].offer.description;
var templateFhoto = templateCard.content.querySelector('.popup__photos');
for (i = 0; i < arrayPhotos.length; i++) {
  // переменная для хранения копий шаблонов объектов
  var copyTemplateFhoto = templateFhoto.querySelector('img').cloneNode(true);
  copyTemplateFhoto.setAttribute('src', arrayPhotos[i]);
}
templateCard.content.querySelector('.popup__avatar').setAttribute('src', arraNumbers[0].author.avatar);

document.querySelector('.map').appendChild(templateCard.content);

// в неавтивном режиме стаивм на поля disabled
var arryInput = document.querySelectorAll('input, selector');
for (var i = 0; i < arryInput.length; i++) {
    arryInput[i].setAttribute('disabled', 'true');
};
// убираем .map--faded из блока map
var createdItem = document.querySelector('.map');
var markMap = document.querySelector('.map__pin--main');
var addressField = document.querySelector('#address');
addressField.setAttribute('value', '600' + ', ' + '400');
var onMapremoval = function () {
  createdItem.classList.remove('map--faded');
  addressField.setAttribute('value', '600' + ', ' + '450');
  
markMap.addEventListener('mousedown', function(evt) {
  if (evt.which == 1) {
    onMapremoval();
    for (var i = 0; i < arryInput.length; i++) {
    arryInput[i].setAttribute('disabled', 'false');
    };
  }
});
markMap.addEventListener('keydown', function(evt) {
  if (evt.key === ENTER_KEY) {
    onMapremoval();
    for (var i = 0; i < arryInput.length; i++) {
    arryInput[i].setAttribute('disabled', 'false');
    };
  }
});

