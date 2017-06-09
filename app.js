//Create the renderer
let renderer = PIXI.autoDetectRenderer( 500 , 500 );
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();
//Tell the `renderer` to `render` the `stage`

function drawStars(){
  for(var i = 0 ; i < 1500 ; i++){
    var x = Math.round(Math.random() * window.innerWidth)
    var y = Math.round(Math.random() * window.innerHeight)
    var rad = Math.ceil(Math.random() * 2)
    var alpha = Math.min(Math.random() +  0.25 , 1)

    var star = new PIXI.Graphics();
    star.beginFill( 0xFFFFFF , alpha)
    star.drawCircle(x , y , rad)
    star.endFill()
    stage.addChild(star)

  }
}
drawStars()
renderer.render(stage);
