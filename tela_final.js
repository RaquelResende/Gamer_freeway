
function setup() {
    createCanvas(500, 400);
    trilha.loop();
  }
  
  function tela2() {
    background(imageDaEstrada);
    mostrarAtor();
    mostrarCarro();
    movimentaCarro();
    movimentarAtor();
    movimentoRetornoCarro();
   verificaColisao();
    incluiPontos()
    marcarPontos()
  }
  