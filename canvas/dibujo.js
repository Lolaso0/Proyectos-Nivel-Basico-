var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("#AAF", 0, 0, 10, 300);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
