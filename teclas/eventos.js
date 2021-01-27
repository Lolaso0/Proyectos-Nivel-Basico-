var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var anchito = document.getElementById("cajaLienzoAncho");
var altito = document.getElementById("cajaLienzoAlto");
var enviarAnchito = document.getElementById("botonTamano");
var reiniciar = document.getElementById("botonReiniciar");
enviarAnchito.addEventListener("click", enviarTamano);
reiniciar.addEventListener("click", enviarTamano);
document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
console.log(teclas);
var inicioX = area_de_dibujo.width;
var inicioY = area_de_dibujo.height;
var xt = inicioX/2;
var yt = inicioY/2;
var estado;
var inicio = 0;
var c = document.getElementById("cajaColor");
var gruesoL = document.getElementById("grosorLinea");

function enviarTamano()
{
  area_de_dibujo.width = parseInt(anchito.value);
  area_de_dibujo.height = parseInt(altito.value);
}

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
}

function moverMouse(evento)
{
  if(estado == 1)
  {
    dibujarLinea(x, y, evento.layerX, evento.layerY, papel, parseInt(gruesoL.value));
    x = evento.layerX;
    y = evento.layerY;
  }
}

function dibujarLinea(xi, yi, xf, yf, lienzo, grueso)
{
  lienzo.beginPath();
  lienzo.strokeStyle = c.value;
  lienzo.lineWidth = grueso;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  console.log(evento);
  var movimiento = 7;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(xt, yt, xt, yt - movimiento, papel);
      yt = yt - movimiento;
    break;

    case teclas.DOWN:
      dibujarLinea(xt, yt, xt, yt + movimiento, papel);
      yt = yt + movimiento;
    break;

    case teclas.LEFT:
      dibujarLinea(xt, yt, xt - movimiento, yt, papel);
      xt = xt - movimiento;
    break;

    case teclas.RIGHT:
      dibujarLinea(xt, yt, xt + movimiento, yt, papel);
      xt = xt + movimiento;
    break;

    default:
    break;
  }
}
