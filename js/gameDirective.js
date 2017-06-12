angular.module('myApp')
.directive('gameDirective' , function(){

    return {
      restrict: 'A'
     ,controller: 'game-controller'
     ,link : (scope ,elm)=>{


      scope.play = function(){
    //Create the renderer
    var renderer = PIXI.autoDetectRenderer( 1000 , 1000 );
    renderer.view.style.position = "absolute";
    renderer.view.style.display = "block";
    renderer.autoResize = true;
    renderer.resize(window.innerWidth, window.innerHeight);


    //  var gameWrapper = document.querySelector("#gameWrapper");
    //  console.log(gameWrapper);
    //Add the canvas to the HTML document
    elm.append(renderer.view);

    //Create a container object called the `stage`
    var stage = new PIXI.Container();
    //---------------loader to load the sprite sheet -----------
      PIXI.loader
         .add('spritSheet1' , "../assets/craft.png")
        .load(setup)

        var spaceShip
         , idle2
         , galaxy
         , galaxy2
         , infos
         , sideStars
         , blackHole
         , moon
         ,laser
         ,moveLaser
         ,generateLaser
         ,button
         ,buttonHome
         ,buttonHover ;
         var watcher = false;
         var myIntreval;

        function setup(){
    //---------------------- spaceShip animation -----------------//

        var rect = new PIXI.Rectangle(0,0,800,600 );
        var texture = PIXI.loader.resources["spritSheet1"].texture;

        texture.frame = rect;
          spaceShip = new PIXI.Sprite(texture);
          spaceShip.anchor.set(0.5);

        // move the sprite to the center of the screen
        spaceShip.x = renderer.width / 2 - 600;
        spaceShip.y = renderer.height / 2 + 240;
        spaceShip.width = 500;
        spaceShip.height = 400;


        idle2 = setInterval(function(){
                if(rect.x >= 800 * 4 ) {
                  rect.x = 0;
                }
                else{
                spaceShip.texture.frame = rect;
                rect.x += 800;
                }
              }, 100);
    //---------------------------------------------------
    //---------- adding 1st galaxy img ------------------//
           galaxy = new PIXI.Sprite.fromImage('../assets/galaxy.png')
           galaxy.x = renderer.width / 2 - 900;
           galaxy.y = renderer.height / 2 - 400;
           galaxy.width = 500;
           galaxy.height = 300;
    //------------------------------------------------------
    //------------------adding 2nd galaxy img --------------
          galaxy2 = new PIXI.Sprite.fromImage('../assets/galaxy2.png')
          galaxy2.anchor.set(0.5)
          galaxy2.x = renderer.width / 2 + 700;
          galaxy2.y = renderer.height / 2 + 300;
          galaxy2.width = 400;
          galaxy2.height = 200;

    //------------------------------------------------------
    //-------------adding random stars --------------------
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

    //-----------------------------------------------------

    //------------- adding personal-infos img --------------
          infos = new PIXI.Sprite.fromImage('../assets/infos.png')
          infos.anchor.set(0.5)
          infos.x = renderer.width / 2 + 2100;
          infos.y = renderer.height / 2 ;
          infos.width = 2000;
          infos.height = 600;
    //------------------------------------------------------
    //-----------------adding stars to the left of the page
          sideStars = new PIXI.Sprite.fromImage('../assets/stars.png')
          sideStars.anchor.set(0.5)
          sideStars.x =  renderer.width / 2 + 890;
          sideStars.y = renderer.height / 2;
          sideStars.rotation += 1.6

    //-------------------------------------------------------
    //-------------------adding black hole -----------------
          blackHole = new PIXI.Sprite.fromImage('../assets/bh.png')
          blackHole.anchor.set(0.5);
          blackHole.x = renderer.width / 2 ;
          blackHole.y = renderer.height / 2 ;
          blackHole.width = 300;
          blackHole.height = 300;
    //------------------------------------------------------
    //---------------adding moon ---------------------------
          moon = new PIXI.Sprite.fromImage('../assets/moon.png')
          moon.anchor.set(0.5);
          moon.x = renderer.width / 2 + 400 ;
          moon.y = renderer.height / 2 - 200 ;
          moon.width = 400;
          moon.height = 400;
    //------------------------------------------------------
    //---------------- creating laser shoots ---------------

          laser = new PIXI.Graphics()
          laser.beginFill(0xccff00);
          laser.moveTo(0.0);
          laser.lineTo(-26 , 80);
          laser.lineTo(26 , 80);
          laser.endFill();

          laser.beginFill(0xccff00);
          laser.drawRect(-15 , 60 , 150 , 8);
          laser.endFill();

          laser.x = spaceShip.x
          laser.y = spaceShip.y



    //------------------------------------------------------
    //-------------------adding home button ----------------
     buttonHome = PIXI.Texture.fromImage('../assets/homeB.png');
     buttonHover = PIXI.Texture.fromImage('../assets/homeBhover.png');
     button =  new PIXI.Sprite(buttonHome);
     button.buttonMode = true;
     button.interactive = true;
     button.anchor.set(0.5);
     button.x = renderer.width / 2 - 100 ;
     button.y = renderer.height / 2 - 450;
     button.width = 100;
     button.height = 100;

     button.on('pointerdown', onButtonDown);
     button.on('pointerover', onButtonOver);
     button.on('pointerout', onButtonOut);
        //----- button's functions ----- //
        function onButtonDown() {
                this.isdown = true;
                this.alpha = 1;
                scope.go()
              }
        function onButtonOver(){
          this.isOver = true;
              if (this.isdown) {
                return;
              }
              this.texture = buttonHover;
        }

        function onButtonOut() {
          this.isOver = false;
          if (this.isdown) {
              return;
          }
          this.texture = buttonHome;
        }

        //------------------------------//


    //------------------------------------------------------
    //-----------------moveing infos function ---------------
            window.onkeydown = function(e) {

              laser.x = spaceShip.x
              laser.y = spaceShip.y
            var key = e.keyCode ? e.keyCode : e.which;
            var flag = true;
            if (key == 39) {
               infos.x -= 17;
               galaxy.x -= 0.1;
               galaxy2.x -= 0.1;
               star.x -= 0.41
               if (infos.x <= -1000) {
                  infos.x = renderer.width / 2 + 1950 ;
                 spaceShip.x = renderer.width / 2 - 600;

               }


            }
            else if (key == 37) {
               infos.x += 17;
               laser.x -= 4
               galaxy.x += 0.1;
               galaxy2.x += 0.1;
               star.x += 0.41
            }
            else if (key == 38) {
              spaceShip.y -= 7;
            }
            if(spaceShip.y > renderer.height / 2 + 370 ){
              flag = false
            }
            if (!flag && key == 40) {
              spaceShip.y = renderer.height / 2 + 370;
            }
            else if (flag && key == 40){
              spaceShip.y += 7;
            }
            if (key == 32) {
              if (watcher === false) {
                watcher = true;
                 myIntreval = setInterval(function(){
                  laser.x += 12
                },0)
              }

            }

          }


    //-------------------------------------------------------





          stage.addChild(blackHole ,sideStars, galaxy , galaxy2 ,star , moon ,infos , button ,laser  ,spaceShip )

      }
      function animationLoop(){

        requestAnimationFrame(animationLoop);
          galaxy2.rotation -= 0.001
          if (laser.x > renderer.width) {
            if (laser.x > renderer.width) {
              clearInterval(myIntreval)
              laser.x = spaceShip.x
              laser.y = spaceShip.y
              watcher = false;
          //Tell the `renderer` to `render` the `stage`
          renderer.render(stage);

        }
          }
        //Tell the `renderer` to `render` the `stage`
        renderer.render(stage);

      }



    animationLoop()
    }
    scope.play();
    }

  }
});
