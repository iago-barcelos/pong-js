//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 27;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90
let colidiu = false

//variaveis do oponente
let xRaqueteOponente = 585 ;
let yRaqueteOponente = 150;
let raqueteComprimentoOponente = 10;
let raqueteAlturaOponente = 90
let velocidadeYoponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha ();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente,yRaqueteOponente)
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

 
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function mostraBolinha (){
 circle (xBolinha ,yBolinha ,diametro) 
}

function movimentaBolinha () {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda (){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0) {
     velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || 
    yBolinha - raio < 0) {
    velocidadeYBolinha *=-1;
}
}

function mostraRaquete (x,y){
  rect (x, y, raqueteComprimento, raqueteAltura)
}

function mostraRaqueteOponente (){
  rect (xRaqueteOponente, yRaqueteOponente, raqueteComprimentoOponente, raqueteAlturaOponente)

}
  
function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10
  }
}

function verificaColisaoRaquete (x, y) {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete (x, y) {
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
}
}  
  

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente

}