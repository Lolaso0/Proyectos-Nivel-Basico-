
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var cantidadVacas = aleatorio(0, 26);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidadVacas);
    for(var v=0; v < cantidadVacas; v++)
    {
      var x = aleatorio(0, 10);
      var y = aleatorio(0, 10);
      var x = x * 40;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }

  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
