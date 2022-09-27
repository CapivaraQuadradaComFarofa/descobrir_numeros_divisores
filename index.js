var numb = [] // lista com divisores
var altu = 50 // altura da tela
var larg = 40 // largura da tela

function setup() {
  divis = createInput("") // input do número a ser informado pelo usuário
}

function draw() {
  createCanvas(larg, altu);
  background(220);
  textSize(50)
  text(numb, 0, 60)
  divis.size(divis.value().length * 7.4 + 10, 30) // ajustar tamanho do input
  divis.position(0,0) // posição do input
  altu = 62.5 * numb.length + 70 // ajustar altura da tela
}

function keyPressed(){
  if(keyCode == 13){ // apertar ENTER
    
    numb.splice(0, numb.length) // limpar lista
    
    for(let i = 1; i <= divis.value(); i ++){ // para cada valor i de 1 até o número informado
      
      if(divis.value() % i == 0){ // verificar se o valor i é divisivel pelo número informado
        
        splice(numb,  "\n" + divis.value() +" / " + divis.value() / i + " = " + i ) // adicionar valor à lista de divisores e seu resultado
      }
      
    }
    
    larg = numb[0].length * 25 // ajustar largura da tela
  }
}
