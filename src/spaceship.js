var Spaceship = function(left) {

  this.left = left;
  this.$node = $('<div class="spaceship"><div class="cannon"></div></div>');
  this.move();
  this.setPosition(left);
  this.health = 3;

}

Spaceship.prototype.setPosition = function(left) {

  this.left = left;
  var styleSettings = {
    left: left
  };

  this.$node.css(styleSettings);
}

Spaceship.prototype.move = function () {
  var thisElem = this;
  var $elem = this.$node;
  var leftArrow = 37;
  var rightArrow = 39;
 
  $('body').keydown(function(event) {
    if (event.which === leftArrow) {
      thisElem.setPosition(thisElem.left - 20);
    }

    if (event.which === rightArrow) {
      thisElem.setPosition(thisElem.left + 20);
    }

  });
}

Spaceship.prototype.hit = function () {
  if (this.health > 0) {
    this.health--
  }
  $('.health').text('Health: ' + this.health)
  if(this.health <= 0) {
    this.$node.addClass('deadSpaceship')
    $('.message').text('YOU LOSE!');
  }
}