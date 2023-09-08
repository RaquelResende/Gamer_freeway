//codigo Ator

//Movimento Ator
let xAtor = 50;
let yAtor = 366;

//colisao
let colisao = false;

//pontos no jogo 
let meusPontos = 0;

function mostrarAtor(){
    image(imageDoAtor,xAtor, yAtor, 30,30);
}


function movimentarAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover())
    yAtor +=3;
    
  }
}
function verificaColisao(){

    for(let i = 0; i < imageCarros.length; i += 1){
      colisao = collideRectCircle(xCarros[i],yCarros[i],comprimento,altura,xAtor, yAtor,15 )
    
      if (colisao){
        voltaAtor();
      
        if (pontosMaiorZero()){
          meusPontos -=1;
        }
      }
      
    }
  }

function voltaAtor(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(meusPontos,width/8.5, 27 )
}
function marcarPontos(){
  if(yAtor < 15){
    meusPontos += 1
    ponto.play()
   voltaAtor()
    
  };
}
function pontosMaiorZero(){
  return meusPontos > 0; 
}
function podeMover(){
  return yAtor < 366;
}