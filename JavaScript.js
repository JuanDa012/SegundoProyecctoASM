let canvas;

// FUNCIÓN DE CONFIGURACIÓN
function setup() {
  // Crear un lienzo (área de dibujo) de 300x300
  canvas = createCanvas(300, 300);
  // Adiciona el lienzo al div con el atributo id igual a canvas-container
  canvas.parent("canvas-container");
}

// FUNCIÓN DONDE SE PROGRAMA LA FUNCIONALIDAD
function draw() {
  // Pinta el fondo del lienzo de color negro
  background(0, 0, 0);
  // Configura en blanco el color de relleno aplicado al texto
  fill(255, 255, 255);
  // Configura en negrilla el estilo del texto
  textStyle(BOLD);
  // Configura en 100 el tamaño del texto
  textSize(100);
  // Escribe el texto ASM
  text("ASM", 30, 180);
}

// CAMBIA EL TAMAÑO DEL LIENZO SI LA VENTANA DEL NAVEGADOR WEB CAMBIA DE TAMAÑO
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
