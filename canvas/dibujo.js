var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var valor_color = document.getElementById("texto_color");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var yi, xf;
  var colorcito = texto_color.value;
  var espacio = ancho/lineas;

  if(colorcito == 1)
  {
    colorcito = "red";
  }
  else if (colorcito == 2)
  {
    colorcito = "blue";
  }
  else if (colorcito == 3)
  {
    colorcito = "green";
  }
  else if (colorcito == 4)
  {
    colorcito = "#efb810";
  }
  else if (colorcito == 5)
  {
    colorcito = "black";
  }
  else
  {
    colorcito = "#FAA";
  }

  for(l = 0; l < lineas; l=l+1)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, yi, 0, 300, xf);
    xf = 290 - (espacio * l);
    dibujarLinea(colorcito, 300, yi, xf, 300);
    dibujarLinea(colorcito, yi, 0, 0, xf);
    console.log("Linea" + l);
  }

  dibujarLinea(colorcito, 1, 1, 1, 300);
  dibujarLinea(colorcito, 1, (ancho-1), (ancho-1), (ancho-1) );
  dibujarLinea(colorcito, (ancho-1), 1, (ancho-1), (ancho-1));
  dibujarLinea(colorcito, 1, 1, 300, 1);

}
