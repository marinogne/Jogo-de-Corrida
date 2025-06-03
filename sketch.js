function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [50, 150, 250, 350];
let jogador = ["😎", "🤠", "👾", "🥶"];
let quantidade = jogador.length;
let teclas = ["a", "s", "d", "f"];

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("rgb(57,57,133)");
  } else {
    background("rgb(88,22,22)");
  }
}

function desenhaJogadores() {
  textSize(30);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + "venceu!!", 100, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(25);
    }
  }
}
