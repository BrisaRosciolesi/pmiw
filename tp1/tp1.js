
//https://youtu.be/JsvuA0r3Qoo

let imagenreferencia;
let fondo1;
let fondo2;
let circulo1;
let circulo2;

let grilla = 3;


function preload(){
  imagenreferencia = loadImage("assets/arteoptico.png");
  
}

function setup() {
createCanvas (800,400); 
noStroke(); 
fondo1 = color(0, 0, 40);      
  circulo1 = color(40, 0, 200);  

  fondo2 = color(40, 0, 200);      
  circulo2 = color(0, 0, 40);    

}


function draw() {
 background(255);
 image (imagenreferencia,0,0,400,400);
 const tamano = calcularTamanoCelda();
 
 for (let fila = 0; fila < grilla; fila++) { // dibujo filas
    for (let col = 0; col < grilla; col++) { //dibujo columnas
      const x = 400+ col * tamano; 
      const y = fila * tamano;
      
      let fondo;
      let circulo; 
      
      const filaPar = (fila % 2) === 0;
      const colPar = (col % 2) === 0;
      
      if ((filaPar && colPar) || (!filaPar && !colPar)) { 
        fondo = fondo1;
        circulo = circulo1;
      } else { 
        fondo = fondo2;
        circulo = circulo2;
      }
 cuadradocirculo (x, y, tamano, fondo, circulo);
    }
 }
}

function mousePressed() {
   generarColores();
}

function keyPressed (){
  
 if (keyCode === RIGHT_ARROW) {
    grilla++;
  } else if (keyCode === LEFT_ARROW && grilla > 1) {
    grilla--;
  }

  // reset con la R
  if (key === 'r' || key === 'R') {
    grilla = 3;
    fondo1 = color(0, 0, 40);
    circulo1 = color(40, 0, 200);

    fondo2 = color(40, 0, 200);
    circulo2 = color(0, 0, 40);
  }
}
