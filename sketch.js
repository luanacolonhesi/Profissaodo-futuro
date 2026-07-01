function setup() {
  createCanvas(900, 700);
  background(250);

  desenharCabecalho();
  desenharCaixa();
  desenharTexto();
  desenharBiomedica();
}

function draw() {

}

function desenharCabecalho() {
  fill(156, 39, 176);
  noStroke();
  rect(0, 0, width, 90);

  fill(255);
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);
  text("Minha Profissão do Futuro", width / 2, 38);

  textSize(22);
  text("Biomédica Esteta", width / 2, 70);
}

function desenharCaixa() {
  fill(255);
  stroke(180);
  strokeWeight(2);
  rect(35, 110, 830, 560, 20);
}

function desenharTexto() {

  noStroke();
  fill(40);
  textAlign(LEFT);
  textSize(18);

  let texto =
`Nome: Seu Nome Completo

Escola: Sua Escola

Série/Turma: Sua Série

Profissão escolhida:
Biomédica Esteta

O que faz?

A Biomédica Esteta realiza procedimentos estéticos
faciais e corporais, sempre priorizando a saúde,
a beleza, a autoestima e o bem-estar dos pacientes.

Pontos positivos

• Área em crescimento.
• Boa remuneração.
• Possibilidade de abrir clínica própria.
• Ajuda as pessoas a se sentirem melhor.

Pontos negativos

• Exige atualização constante.
• Equipamentos possuem alto custo.
• Grande responsabilidade profissional.

Motivo da escolha

Escolhi essa profissão porque gosto da área da saúde
e da estética. Quero trabalhar ajudando as pessoas
a melhorarem sua autoestima e qualidade de vida
por meio de procedimentos seguros e responsáveis.`;

  text(texto, 60, 145);
}

function desenharBiomedica() {

  // Cabelo
  fill(80,40,20);
  ellipse(735,210,120);

  // Cabeça
  fill(255,220,190);
  ellipse(735,225,95,115);

  // Olhos
  fill(0);
  ellipse(718,220,7);
  ellipse(752,220,7);

  // Boca
  stroke(180,0,80);
  strokeWeight(2);
  noFill();
  arc(735,250,25,12,0,PI);

  // Pescoço
  noStroke();
  fill(255,220,190);
  rect(727,280,16,18);

  // Jaleco
  fill(255);
  stroke(180);
  rect(690,295,90,120,10);

  // Cruz
  fill(220,0,80);
  noStroke();
  rect(727,320,16,55);
  rect(708,339,54,16);

  // Estetoscópio
  noFill();
  stroke(70);
  strokeWeight(3);
  arc(735,310,65,65,0,PI);

  // Braços
  line(690,330,665,380);
  line(780,330,805,380);

  // Texto
  noStroke();
  fill(156,39,176);
  textAlign(CENTER);
  textSize(18);
  text("Biomédica Esteta",735,450);

  // Coração
  fill(255,80,120);
  ellipse(705,480,20);
  ellipse(725,480,20);
  triangle(695,485,735,485,715,510);
}
