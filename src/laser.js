var Laser = function (left, bottom, top) {
  this.left = left;
  this.bottom = bottom;
  this.top = top;
  this.$laserNode = $('<div class="laser"></div>');
  this.setPosition(this.left, this.bottom, this.top);
};

Laser.prototype.setPosition = function (left, bottom, top) {
  // console.log(left, bottom, top);
  this.left = left;
  this.bottom = bottom;
  this.top = top;

  var styleSettings = {
    left: left,
    bottom: bottom,
    top: top
  };

  this.$laserNode.css(styleSettings);

};

Laser.prototype.shootUp = function () {
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

Laser.prototype.shootDown = function () {
  var thisElem = this;
  var $spaceship = $('.spaceship');
  this.left += 30;
  var isHit = false
  var intervalId = setInterval(function () {
    // console.log(thisElem.top);
    thisElem.setPosition(thisElem.left, undefined, thisElem.top + 5);
    if (thisElem.top === 1000 || isHit) {
      clearInterval(intervalId);
      thisElem.$laserNode.remove();
    } else {
      // check spaceship position
      var laserPosition = thisElem.$laserNode.position();
      var shipPosition = $spaceship.position();

      if (laserPosition.top > shipPosition.top && laserPosition.top < shipPosition.top + $spaceship.heigh()
          && laserPosition.left >= shipPosition.left 
          && laserPosition.left < shipPosition.left + $spaceship.width()) {
          isHit = true;
          window.$spaceship.hit();
      }

    }
  }, 20);
};