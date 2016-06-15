var Invader = function (left, top) {

  this.top = top;
  this.left = left;
  this.$node = $('<img src="images/invader.gif" class="invader">');
  this.setPosition(left, top);

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

}