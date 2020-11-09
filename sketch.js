

var  knife,knifei;
var fruiti1,fruiti2,fruiti3,fruiti4;
var alieni1,alieni2;
var fruita1,fruita2,fruita3,fruita4;
var aliena1,aliena2;
var gamestate=10;
var Play=10;
var Stop=100;
var Score;
var overimage,over;
var knifeSwooshSoun;
var overs;





function preload(){
  knifei=
    loadImage("sword.png");
  fruiti1=
    loadImage("fruit1.png");
  fruiti2=
    loadImage("fruit2.png");
  fruiti3=
    loadImage("fruit3.png");
  fruiti4=
    loadImage("fruit4.png");
  alieni1=
    loadImage("alien1.png");
  alieni2=
    loadImage("alien2.png");
    overimage=
      loadImage("gameover.png");
  knifeSwooshSoun=
    loadSound("knifeSwooshSound.mp3");
  overs=
    loadSound("gameover.mp3")
  
 
}
function setup(){
  createCanvas(600,600);
  knife=createSprite(200,200,30,30)
  knife.addImage("cutting",knifei);
  fruita1=createGroup();
  fruita2=createGroup();
  fruita3=createGroup();
  fruita4=createGroup();
  aliena1=createGroup();
  aliena2=createGroup();
  
  over=createSprite(300,300,500,500)
  over.addImage("overa",overimage);
   
  
  
  knife.setCollider("circle",0,0,50);
  knife.debug = false;
  
  Score = 0
  
  
  
}
function draw(){
background("green")
  

knife.x=World.mouseX;
knife.y=World.mouseY;
  
  if(gamestate==10){
   over.visible=false;
   knife.visible=true;
 if(frameCount%60==0 ) {
  var an=Math.round(random(1,6))
   if(an==1){
     fruit1a();
     
   }
   else if(an==2){
     fruit2a();
     
   }
   else if(an==3){
     fruit3a();
     
   }
   else if(an==4){
     fruit4a();
     
   }
   else if(an==5){
     alien1a();
     
   }
  else {
     alien2a();
     
   }
  
  }
  
    fill("black");
    textSize(20)
    text("Score:"+Score,400,100)
    
  
      if(fruita1.isTouching(knife)){
        fruita1.destroyEach();
        Score=Score+1;
        knifeSwooshSoun.play();
        
    }
  if(fruita2.isTouching(knife)){
        fruita2.destroyEach();
        Score=Score+1;
    knifeSwooshSoun.play();
        
    }
  if(fruita3.isTouching(knife)){
        fruita3.destroyEach();
        Score=Score+1;
        knifeSwooshSoun.play();
    }
if(fruita4.isTouching(knife)){
        fruita4.destroyEach();
        Score=Score+1;
        knifeSwooshSoun.play();
    }
  if(aliena1.isTouching(knife)){
      gamestate=100;
        overs.play();
        
    }
  if(aliena2.isTouching(knife)){
      gamestate=100;
        Score=0;
        overs.play();
    }
  }
    
    
    
    
    if(gamestate==100){
    knife.visible=false;
    over.visible=true;
      fruita1.destroyEach();
      fruita2.destroyEach();
      fruita3.destroyEach();
      fruita4.destroyEach();
      aliena1.destroyEach();
      aliena2.destroyEach();
      knife.x=300;
      knife.y=300;
      knife.velocityX=0;
      knife.velocityY=0;
    
      fill("black")
      textSize(30);
      text("Please press Space to restart",150,400)
    
    
    
  }
  if(gamestate==100 && keyDown("Space") ){
    gamestate=10;
     
  }









 drawSprites(); 


}


function fruit1a(){
  var fruit1=createSprite((Math.round(random(100,550))),0,50,50);
      fruit1.addImage("sliced",fruiti1);
  fruita1.add(fruit1);
  var d=Math.round(random(1,2));
    if(d==1){
      fruit1.y=600;
      fruit1.velocityY=-(7+(Score/4));
      }
    else{
      fruit1.y=0;
      fruit1.velocityY=7+(Score/4)
       
    }
  fruit1.lifetime=550;
  fruit1.scale=0.4;
  


}


  function fruit2a(){
  var fruit2=createSprite((Math.round(random(100,550))),0,50,50);
      fruit2.addImage("sliced",fruiti2);
  fruita2.add(fruit2);
    
    fruit2.lifetime=550;
   var p=Math.round(random(1,2));
    if(p==1){
      fruit2.y=600;
      fruit2.velocityY=-(7+(Score/4));
      }
    else{
      fruit2.y=0;
      fruit2.velocityY=7+(Score/4)
       
    }
    
    fruit2.scale=0.4;
  
  
  }



    function fruit3a(){
  var fruit3=createSprite((Math.round(random(100,550))),0,50,50);
      fruit3.addImage("sliced",fruiti3);
    fruita3.add(fruit3);
    var t=Math.round(random(1,2));
    if(t==1){
      fruit3.y=600;
      fruit3.velocityY=-(7+(Score/4));
      }
    else{
      fruit3.y=0;
      fruit3.velocityY=7+(Score/4)
       
    }
    fruit3.lifetime=550;
      fruit3.scale=0.4;
  
    }
function fruit4a(){
  var fruit4=createSprite((Math.round(random(100,550))),0,50,50);
      fruit4.addImage("sliced",fruiti4);
fruita4.add(fruit4);
var r=Math.round(random(1,2));
    if(r==1){
      fruit4.y=600;
      fruit4.velocityY=-(7+(Score/4));
      }
    else{
      fruit4.y=0;
      fruit4.velocityY=7+(Score/4)
       
    }
fruit4.lifetime=550;
  fruit4.scale=0.4;
}
function alien1a(){
  var alien1=createSprite((Math.round(random(100,550))),0,50,50);
      alien1.addImage("sliced",alieni1);
var ra=Math.round(random(1,2));
    if(ra==1){
      alien1.y=600;
      alien1.velocityY=-(7+(Score/4));
      }
    else{
      alien1.y=0;
      alien1.velocityY=7+(Score/4)
       
    }
aliena1.add(alien1);
alien1.lifetime=550;
  alien1.scale=0.7;
  

}
function alien2a(){
  var alien2=createSprite((Math.round(random(100,550))),0,50,50);
      alien2.addImage("sliced",alieni2);
aliena2.add(alien2);
var rb=Math.round(random(1,2));
    if(rb==1){
      alien2.y=600;
      alien2.velocityY=-(7+(Score/4));
      }
    else{
      alien2.y=0;
      alien2.velocityY=7+(Score/4)
       
    }
alien2.lifetime=550;
  alien2.scale=0.7;
}
  
  
  
  
  
  
  
  
