//codigo Carro

//listas
let velocidades = [9 ,5,3.1,5,3.3,2.3];
let yCarros =[43,96,150,210,270,318];
let xCarros = [600,600,600,600,600,600];
let comprimento = 38;
let altura = 38;



function mostrarCarro(){
  //enquanto que minha variável i que começa com 0 for menor que a quantintidade da minha lista EU QUERO QUE DESENHE O CARRO e acrescente mais 1para ir para próximo
  for(let i = 0; i< imageCarros.length; i +=1){
    
  image(imageCarros[i], xCarros[i],yCarros[i],comprimento,altura);
  }
}
function movimentaCarro(){
  for (let i = 0; i < imageCarros.length; i += 1 ){
  xCarros[i] -= velocidades[i];
  }
}
function movimentoRetornoCarro(){
  
  for(let i = 0; i < imageCarros.length; i += 1)
  

  if( passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
  }
  
}
function passouTodaTela(xCarro){
  return xCarro < -50 ;
  
}