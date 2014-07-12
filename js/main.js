window.onload = function(){

  paused = false;
  var lastTime = (new Date()).getTime();

  function init(width, height){
    console.log("Game is initializing");
    myGame = new Game(width, height);

    myGame.newButton(
      "right",
      function(){floppy.vel.x = 100},
      function(){floppy.vel.x = 0}
    );

    myGame.newButton(
      "left",
      function(){floppy.vel.x = -100},
      function(){floppy.vel.x = 0}
    );

    myGame.newButton(
      "up",
      function(){floppy.vel.y = -100},
      function(){floppy.vel.y = 0}
    );

    myGame.newButton(
      "down",
      function(){floppy.vel.y = 100},
      function(){floppy.vel.y = 0}
    );

    myGame.newToggle(
      "v",
      function(){
        var bullet = new Bunny(floppy.pos.x,floppy.pos.y);
        bullet.vel.y = -300;
        bullet.rotationSpeed = 0;
        bullet.sprite.scale.x = 0.5;
        bullet.sprite.scale.y = 1.5;
        myGame.spawn(bullet);
      }
    )

    myGame.newToggle(
      "p",
      function(){
        if(paused){
          paused = false;
        }
        else{
          paused = true;
        }
      }
    );

    myGame.newTexture("bunny", "bunny.png");

    var floppy = new Bunny(50,75);
    myGame.spawn(floppy);

    myGame.spawn(new Bunny(300, 300));

    console.log("Starting Game Loop");
    gameLoop();
  }

  function update(){
    if(!paused){
      myGame.update();
    }
  }

  function render(){
    myGame.render();
  }

  function gameLoop(){
    var currentTime = (new Date()).getTime();
    myGame.delta = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    update();
    render();

    requestAnimationFrame(gameLoop);
  }

  init(800, 600);
}
