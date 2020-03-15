'use strict';
// движение метки
(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  var addressField = document.querySelector('#address');
  var Card = document.querySelector('.map__pins');
  mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shift = {
        x:  startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      addressField.setAttribute('value', startCoords.x + ', ' + startCoords.y);


        if ((mapPinMain.offsetTop - shift.y) > 0 && (mapPinMain.offsetTop - shift.y) < (Card.offsetHeight - 50) && (mapPinMain.offsetLeft - shift.x) >= (Card.offsetLeft - 20) && (mapPinMain.offsetLeft - shift.x) < (Card.offsetLeft + Card.offsetWidth - 30)) {
          mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
          mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
        } return false;

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  })
})();
