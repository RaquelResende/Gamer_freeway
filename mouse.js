function mouseClicked(){
    if  (mouseX >= x && mouseX <= (x+l) && mouseY >= y && mouseY <= (y+h) ){
      tela = 1; 
    }
  }
  
  function mouseClicked(){
    if (mouseX >= x && mouseX <= (x+l) && mouseY >= y && mouseY <= (y+h) ) {
      tela = 2;
    }
  }
  function mouseMoved(){
    valor = valor +10;
    if(valor > 255){
      valor = 0
    }
  }