var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
console.log(teclas);
var x = 100;
var y = 100;

dibujarLinea("red",x-1 ,y-1, x+1, y+1, papel);



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
  var colorcito = "blue";
  var movimiento = 2;
  switch (evento.keyCode)
  {
    case teclas.UP:
      console.log("Vamo pa arrrriba");
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;

    case teclas.DOWN:
      console.log("Vamo pah bajoh");
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;

    case teclas.LEFT:
      console.log("Vamo pa izquielda");
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;

    case teclas.RIGHT:
      console.log("Vamo pa delechah");
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;

    default:
      console.log("Otra TECLA");
    break;
  }
}
