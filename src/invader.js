var Invader = function (left, top) {

  this.top = top;
  this.left = left;
  this.$node = $('<img src="images/invader.gif" class="invader">');
  this.setPosition(left, top);

}


Invader.prototype.setPosition = function(left, top) {
  console.log("set setPosition", this);
  this.left = left;
  this.top = top;

  var styleSettings = {
    left: left,
    top: top
  };

  this.$node.css(styleSettings);
}