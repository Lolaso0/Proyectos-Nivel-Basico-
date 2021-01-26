var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
console.log(teclas);
var x = 150;
var y = 150;
var estado;
var inicio = 0;
var colorcito = "blue";
var movimiento = 5;

dibujarLinea(colorcito,x-1 ,y-1, x+1, y+1, papel);

function presionarMouse(evento)
{
  x = evento.layerX;
  y = evento.layerY;
  estado = 1;
}

function soltarMouse(evento)
{
  x = evento.layerX;
  y = evento.layerY;
  estado = 0;
  dibujarLinea(colorcito, x, y, x, y ,papel);
}

function moverMouse(evento)
{

  x = evento.layerX;
  y = evento.layerY;
  if(estado == 1)
  {
    dibujarLinea(colorcito, x , y, x + movimiento, y + movimiento, papel);
    x = movimiento + x + 1
    y = movimiento + y + 1
  }
}

function dibujarLinea(colorcito, xi, yi, xf, yf, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorcito;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  console.log(evento);
  var movimiento = 2;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;

    default:
    break;
  }
}
