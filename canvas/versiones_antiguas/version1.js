
var pedido = parseInt(prompt("Cuantas Lineas Quieres?\n(Maximo 30)"));
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var yi, xf;
var colorcito = parseInt(prompt("Elije Tu Color\n1) Rojo\n2) Azul \n3) Verde\n4) Dorado"));
if(colorcito == 1)
{
  colorcito = "red"
}
else if (colorcito == 2)
{
  colorcito = "blue"
}
else if (colorcito == 3)
{
  colorcito = "green"
}
else if (colorcito == 4)
{
  colorcito = "#efb810"
}
else
{
  colorcito = "white"
}

for(l = 0; l < pedido; l=l+1)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  dibujarLinea(colorcito, yi, 0, 300, xf);
  xf = 290 - (10 * l);
  dibujarLinea(colorcito, 300, yi, xf, 300);
  dibujarLinea(colorcito, yi, 0, 0, xf);
  console.log("Linea" + l);
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299 );
dibujarLinea(colorcito, 299, 1, 299, 299);
dibujarLinea(colorcito, 1, 1, 300, 1);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
