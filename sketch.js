function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#FF5722');

  // Cabeça
  fill('#03A9F4');
  circle(200, 200, 300);

  // Olhos
  fill('white');
  circle(150, 150, 60);
  circle(250, 150, 60);

  // Pupilas
  fill('black');

  desenhaPupila(150, 150);
  desenhaPupila(250, 150);

  // Boca
  line(150, 270, 250, 235);

  // Nariz
  fill('#3F51B5');
  triangle(200, 180, 170, 220, 220, 220);

  // Sobrancelhas
  line(123, 115, 178, 113);
  line(225, 116, 279, 106);
}

function desenhaPupila(cx, cy) {

  // Vetor do centro do olho até o mouse
  let dx = mouseX - cx;
  let dy = mouseY - cy;

  // Distância até o mouse
  let distancia = sqrt(dx * dx + dy * dy);

  // Limite máximo da pupila dentro do olho
  let limite = 20;

  // Se ultrapassar o limite, reduz o vetor
  if (distancia > limite) {
    dx = dx / distancia * limite;
    dy = dy / distancia * limite;
  }

  // Desenha a pupila
  circle(cx + dx, cy + dy, 10);
}