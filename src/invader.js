var Invader = function (left, top) {

  this.top = top;
  this.left = left;
  this.$node = $('<img src="images/invader.gif" class="invader">');
  this.setPosition(left, top);
  this.shoot();
}


Invader.prototype.setPosition = function(left, top) {
  console.log("setPosition", left, top);
  this.left = left;
  this.top = top;

  var styleSettings = {
    left: left,
    top: top
  };

  this.$node.css(styleSettings);
}

Invader.prototype.die = function () {

  this.$node.addClass('deadInvader');
  window.numberOfInvaders--;
  clearInterval(this._intervalId);
  window.score++;
  $('.score').text('Score: ' + window.score);

  if (window.numberOfInvaders === 0) {
    $('.message').text('YOU WIN!');
  }

}

Invader.prototype.shoot = function () {

  var thisElem = this;
  this._intervalId = setInterval(function () {
    var shinyNewLaser = new Laser(thisElem.left, undefined, thisElem.top);
    $('body').append(shinyNewLaser.$laserNode);
    shinyNewLaser.shootDown();
  }, Math.floor(Math.random() * 50000) + 1000);

}