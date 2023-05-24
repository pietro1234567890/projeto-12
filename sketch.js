var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png") 
  boyImg= loadAnimation ("Runner-1.png","Runner-2.png") 
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200,0,10,10)
  path.addImage(pathImg)
 path.scale=1.2;
 path.velocityY = 4;
 boy = createSprite(200,280);
 boy.addAnimation("menino", boyImg)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(10,200,40,400);
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(400,200,40,400);
 rightBoundary.visible = false;
}

function draw() {
  background(0);
 
  
  // mover o menino com o mouse usando mouseX
  boy.x = mouseX
  edges= createEdgeSprites();
  boy.collide(leftBoundary)
  boy.collide(rightBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
