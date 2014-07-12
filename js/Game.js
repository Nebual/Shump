function Game(width, height){
  //Game attributes
  this.width = width;
  this.height = height;

  //Rendering stuff
  this.renderer = new PIXI.WebGLRenderer(width, height);
  document.body.appendChild(this.renderer.view);
  this.stage = new PIXI.Stage;
  this.textures = new Array();

  //Input stuff
  this.input = new window.keypress.Listener();

  //Time stuff
  this.delta = 0;

  //Entity Stuff
  this.entities = new Array();
}

Game.prototype = {
  constructor: Game,
  update: function(){
    for(var i = 0; i < this.entities.length; i++){
      this.entities[i].update();
    }
    ///console.log(this.delta);
  },
  render: function(){
    this.renderer.render(this.stage);
  },
  newButton: function(combo, keyDown, keyUp){
    this.input.register_combo({
      "keys" : combo,
      "on_keydown" : keyDown,
      "on_keyup" : keyUp
    });
  },
  newToggle: function(combo, action){
    this.input.register_combo({
      "keys": combo,
      "on_keydown": action
    });
  },
  newTexture: function(key, value){
    this.textures[key] = PIXI.Texture.fromImage("media/" + value);
  },
  getTexture: function(key){
    return this.textures[key];
  },
  spawn: function(object, posX, posY){
    this.stage.addChild(object.sprite);
    this.entities.push(object);
    console.log(this.entities);
  }
};
