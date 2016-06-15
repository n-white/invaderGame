var Laser = function (left, bottom) {
  this.left = left;
  this.bottom = bottom;
  this.$laserNode = $('<div class="laser"></div>');
  this.setPosition(this.left, this.bottom);
  this.move();
};

Laser.prototype.setPosition = function (left, bottom) {
  this.left = left;
  this.bottom = bottom;

  var styleSettings = {
    left: left,
    bottom: bottom
  };

  this.$laserNode.css(styleSettings);

};

Laser.prototype.move = function () {
  var thisElem = this;
  var intervalId = setInterval(function () {
    thisElem.setPosition(thisElem.left, thisElem.bottom + 2);
    if (thisElem.bottom === 800) {
      clearInterval(intervalId);
      thisElem.$laserNode.remove();
    } else {
      // check invaders position
      console.log('laserPosition: ', thisElem.$laserNode.position());

      window.invaders.forEach(function (invader, index) {
        console.log('index: ' + index, invader.$node.width());
      })
    }
  }, 10);
};