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
var getNumberWithZerro() {
  return '0' + getRandomNumber(8);
};
// функция вывода массива случайной длины из предложенных
var randomArray = function(array) {
  var emptyArray = [];
  for (i = 0; i < getRandomNumber(array.length); i++) {
    emptyArray.push(array[getRandomNumber(array.length-1)]);
    return emptyArray;
  }
}
// генератор строки(текста)
var stringGenerator = function(len) {
  chrs = 'ячсмитьбюфывапролджэйцукенгшщзхъЯЧСМИТЬБЮФЫВАПРОЛДЖЭЙЦУКЕНГШЩЗ0123456789 ,.';
    var str = '';
    for (var i = 0; i < len; i++) {
        var pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos,pos+1);
    }
    return str;
}

var generatingObject = function() {
  return {
    author: {
      avatar: "img/avatars/user" + arraNumbers[i] + ".png"
    },
    offer: {
      title: randomString().toString(),
      address: getRandomNumber(1000) + ', ' + getRandomNumber(1000),
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
      generatingObject();
    }
};

// убираем .map--faded из блока map
var createdItem = document.querySelector('.map');
createdItem.classList.remove('map--faded');







