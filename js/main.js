'use strict';
// массив для объектов
var arraNumbers = [];
var arrayValues = ['palace', 'flat', 'house', 'bungalo'];
var arrTime = ['12:00', '13:00', '14:00'];
var arrayStrings = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
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
    return emptyArray;
  }
};
// генератор строки(текста)
var stringGenerator = function(len) {
  var chrs = 'ячсмитьбюфывапролджэйцукенгшщзхъЯЧСМИТЬБЮФЫВАПРОЛДЖЭЙЦУКЕНГШЩЗ0123456789 ,.';
  var str = '';
  for (i = 0; i < len; i++) {
    var pos = getRandomNumber(chrs.length);
    str += chrs.substring(pos,pos+1);
  }
    return str;
}

var generatingObject = function() {
  return {
    author: {
      avatar: "img/avatars/user" + getNumberWithZerro() + ".png"
    },
    offer: {
      title: stringGenerator(100),
      address: getRandomNumber(600) + ', ' + getRandomNumber(350),
      price: getRandomNumber(10000000),
      type: arrayValues[getRandomNumber(arrayValues.length)],
      rooms: getRandomNumber(10),
      guests: getRandomNumber(100),
      checkin: arrTime[getRandomNumber(arrTime.length)],
      checkout: arrTime[getRandomNumber(arrTime.length)],
      features: randomArray(arrayStrings),
      description: stringGenerator(100),
      photos: randomArray(arrayPhotos),
    },
    location: {
      x: getRandomNumber(1000),
      y: getRandomNumber(1000),
    },
    }
}
var arrayCreation = function() {
    for (i = 1; i <= 8; i++){
      arraNumbers.push(generatingObject());
    }
};

// убираем .map--faded из блока map
var createdItem = document.querySelector('.map');
createdItem.classList.remove('map--faded');

// 3 пункт
// объявляем функцию создания эелемента DOM
var creatingItem = function (value) {
  return document.querySelector(value);
};

for (i = 0; i <= arraNumbers.length; i++) {
  // переменная для хранения копий шаблонов объектов
  var copyTemplate = creatingItem('#pin');
  copyTemplate.style = 'left:' + arraNumbers[i].location.x + 200 + 'px;' + 'top:' + arraNumbers[i].location.y + 200 + 'px;';
  copyTemplate.querySelector('img').setAttribute('src', arraNumbers[i].author.avatar);
  copyTemplate.querySelector('alt').setAttribute('src', arraNumbers[i].title);
  creatingItem('.map__pins').appendChild(copyTemplate);
}



