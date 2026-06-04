function setup() {
 createCanvas(400, 400);
 background(220);

 // Rosto
 fill(255, 220, 180);
 ellipse(200, 200, 150, 200);

 // Olhos
 fill(0);
 ellipse(170, 180, 10, 10);
 ellipse(230, 180, 10, 10);

 // Boca (sorriso leve)
 noFill();
 stroke(0);
 arc(200, 220, 50, 30, 0, PI);

 // Cabelo
 fill(80, 50, 20);
 noStroke();
 arc(200, 150, 160, 180, PI, TWO_PI);
}
