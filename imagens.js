
//sons
let trilha;
let batida;
let ponto;
//codigo Imagens
let imageDaEstrada;
let imageDoAtor;
let imageCarro;
let imageCarro2;
let imageCarro3;

function preload(){
  imageDaEstrada = loadImage("imagens/estrada.png")
  imageDoAtor = loadImage("imagens/ator-1-1.png")
  imageCarro = loadImage("imagens/carro-1.png")
  imageCarro2 = loadImage("imagens/carro-2.png")
  imageCarro3 = loadImage("imagens/carro-3.png")
  imageCarros = [imageCarro, imageCarro2, imageCarro3,imageCarro, imageCarro2,imageCarro3]
  trilha = loadSound("sons/trilha.atravessia.wav")
  ponto = loadSound("sons/ponto.wav")                 
 
  
};
