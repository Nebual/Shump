function Bunny(posX, posY){
  this.sprite = new PIXI.Sprite(myGame.getTexture("bunny"));

  this.width = 26;
  this.height = 37;

  //shortcut to the sprites position
  this.pos = this.sprite.position;
  this.pos.x = posX;
  this.pos.y = posY;

  //move Sprite anchor to the center
  this.pivot = this.sprite.pivot;
  this.pivot.x = 13;
  this.pivot.y = 18;

  //rotationSpeed is in degrees
  this.rotationSpeed = 160;


  this.vel = {x: 0, y: 0};
}

Bunny.prototype = {
  constructor: Bunny,
  update: function(){
    var delta = myGame.delta;
    this.sprite.rotation += (this.rotationSpeed * 0.0174532925) * delta;
    this.pos.x += this.vel.x * delta;
    this.pos.y += this.vel.y * delta;
  }
}
