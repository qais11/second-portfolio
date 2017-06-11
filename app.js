//Create the renderer
var renderer = PIXI.autoDetectRenderer( 1000 , 1000 );
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();
//---------------loader to load the sprite sheet -----------
  PIXI.loader
     .add('spritSheet1' , "./assets/ship_sprite.png")
    .load(setup)

    var spaceShip , idle2 , galaxy , galaxy2 , infos , sideStars , blackHole;

    function setup(){
//---------------------- spaceShip animation -----------------//

    var rect = new PIXI.Rectangle(0,0,1000,300 );
    var texture = PIXI.loader.resources["spritSheet1"].texture;

    texture.frame = rect;
      spaceShip = new PIXI.Sprite(texture);
      spaceShip.anchor.set(0.5);

    // move the sprite to the center of the screen
    spaceShip.x = renderer.width / 2 - 600;
    spaceShip.y = renderer.height / 2 + 240;
    spaceShip.width = 400;
    spaceShip.height = 100;


    idle2 = setInterval(function(){
            if(rect.x >= 2000 ) {
              rect.x = 0;
            }
            else{
            spaceShip.texture.frame = rect;
            rect.x += 1000;
            }
          }, 100);
//---------------------------------------------------
//---------- adding 1st galaxy img ------------------//
       galaxy = new PIXI.Sprite.fromImage('./assets/galaxy.png')
       galaxy.x = renderer.width / 2 - 900;
       galaxy.y = renderer.height / 2 - 400;
       galaxy.width = 500;
       galaxy.height = 300;
//------------------------------------------------------
//------------------adding 2nd galaxy img --------------
      galaxy2 = new PIXI.Sprite.fromImage('./assets/galaxy2.png')
      galaxy2.anchor.set(0.5)
      galaxy2.x = renderer.width / 2 + 700;
      galaxy2.y = renderer.height / 2 + 300;
      galaxy2.width = 400;
      galaxy2.height = 200;

//------------------------------------------------------

//------------- adding personal-infos img --------------
      infos = new PIXI.Sprite.fromImage('./assets/infos.png')
      infos.anchor.set(0.5)
      infos.x = renderer.width / 2 + 1950;
      infos.y = renderer.height / 2 ;
      infos.width = 2000;
      infos.height = 600;
//------------------------------------------------------
//-----------------adding stars to the left of the page
      sideStars = new PIXI.Sprite.fromImage('./assets/stars.png')
      sideStars.anchor.set(0)
      sideStars.x = -100
      sideStars.y = renderer.height / 2 - 150;
      sideStars.width = 900;
      sideStars.height = 800;
//-------------------------------------------------------
//-------------------adding black hole -----------------
      // blackHole = new PIXI.Sprite.fromImage('./assets/bh.png')
      // blackHole.anchor.set(0.5);
      // blackHole.x = renderer.width / 2 - 500;
      // blackHole.y = renderer.height / 2 - 200 ;
      // blackHole.width = 500;
      // blackHole.height = 500;
//------------------------------------------------------
//-----------------moveing infos function ---------------
        window.onkeydown = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        var flag = true;
        if (key == 39) {
           infos.x -= 10;
           spaceShip.x += 4;
           galaxy.x -= 0.1;
           galaxy2.x -= 0.1;
           star.x += 0.41
           console.log(infos.x);
           if (infos.x <= -1000) {
             infos.x = infos.x = renderer.width / 2 + 1950 ;
             spaceShip.x = renderer.width / 2 - 600;

           }

        }
        else if (key == 37) {
           infos.x += 10;
           spaceShip.x -= 4;
           galaxy.x += 0.1;
           galaxy2.x += 0.1;
           star.x -= 0.41
        }
        else if (key == 38) {
          spaceShip.y -= 7;
        }
        if(spaceShip.y > renderer.height / 2 + 240 ){
          flag = false
        }
        if (!flag && key == 40) {
          spaceShip.y = renderer.height / 2 + 240;
        }
        else if (flag && key == 40){
          spaceShip.y += 7;
        }
        }


//-------------------------------------------------------





      stage.addChild(sideStars, galaxy , galaxy2 ,infos  ,spaceShip)

  }
  function animationLoop(){

    requestAnimationFrame(animationLoop);

      galaxy2.rotation -= 0.001
    //Tell the `renderer` to `render` the `stage`
    renderer.render(stage);

  }


  var star = new PIXI.Graphics();

  for(var i = 0 ; i < 700 ; i++){
    var x = Math.round(Math.random() * renderer.view.width );
    var y = Math.round(Math.random() * renderer.view.height );
    var rad = Math.ceil(Math.random() * 2);
    var alpha = Math.min(Math.random() +  0.25 , 1);

    star.beginFill( 0xFFFFFF , alpha);
    star.drawCircle(x , y , rad);
    star.endFill();
  }

  stage.addChild(star )
animationLoop()
