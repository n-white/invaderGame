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
    thisElem.setPosition(thisElem.left, thisElem.bottom + 10);
    if (thisElem.bottom === 1000) {
      clearInterval(intervalId);
      thisElem.$laserNode.remove();
    } else {
      // check invaders position
      var laserPosition = thisElem.$laserNode.position();

      window.invaders.forEach(function (invader, index) {
        if (laserPosition.top <= invader.top + 70 - invader.$node.height() 
            && laserPosition.left >= invader.left 
            && laserPosition.left <= invader.left + invader.$node.width()) {
          thisElem.$laserNode.remove();
          invader.die();
          window.invaders.splice(index, 1);
        }
      })
    }
  }, 10);
};