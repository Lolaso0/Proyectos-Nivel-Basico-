
//Declarar variables y objetos
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

var cerdo = {
  url:"cerdo.png",
  cargaOK:false
}

var pollo = {
  url:"pollo.png",
  cargaOK:false
}

var persona = {
  url:"persona.png",
  cargaOK:false
}

var wasd = {
  w: 87,
  a: 65,
  s: 83,
  d: 68
}

//cantidad de animales
var cantidadVacas = aleatorio(1, 5);
var cantidadCerdos = aleatorio(1, 5);
var cantidadPollos = aleatorio(1, 5);

//evento de carga
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

persona.imagen = new Image();
persona.imagen.src = persona.url;
persona.imagen.addEventListener("load",cargarPersona);


//cargar
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
  var estado = 1;
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
  var estado = 1;
}
function cargarCerdos()
{
  vaca.cargaOK = true;
  dibujar();
  var estado = 1;
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
  var estado = 1;
}
function cargarPersona()
{
  persona.cargaOK = true;
  dibujar();
  var estado = 1;
}

var xPersona = 400;
var yPersona = 400;



var polloX;
var polloY;

var cerdoX;
var cerdoY;
var miau = 1;

var estado = 1;

//Teclas del personaje
var movimiento = 15;
document.addEventListener("keydown", teclas)
function teclas(evento)
{
  switch(evento.keyCode)
  {
    case wasd.w:
      yPersona = yPersona - movimiento;
      estado = 0;
      dibujar(xPersona, yPersona);
  }
}

//dibujar
function dibujar(xPersona, yPersona)
{
  if(estado < 3)
  {
  if(fondo.cargaOK == true)
  {
    if(estado == 1)
    {
      papel.drawImage(fondo.imagen, 0, 0);
    }
  }
  if(vaca.cargaOK)
  {
    for(var v=0; v < cantidadVacas; v++)
    {
      if(estado == 1)
      {
        var vx = aleatorio(0, 10) * 60;
        var vy = aleatorio(0, 10) * 60;
        var vacaX = vx;
        var vacaY = vy;
        papel.drawImage(vaca.imagen, vacaX, vacaY);
      }
      papel.drawImage(vaca.imagen, vacaX, vacaY);
    }
  }
  if(cerdo.cargaOK = true)
  {
    for(var c=0; c < cantidadCerdos; c++)
    {
      if(estado == 1)
      {
        var cx = aleatorio(0, 10) * 60;
        var cy = aleatorio(0, 10) * 60
        estado = 1;
        var cerdoX = cx;
        var cerdoY = cy;
        papel.drawImage(cerdo.imagen, cerdoX, cerdoY);
      }
    }
  }
}
  if(pollo.cargaOK = true)
  {
    for(var p=0; p < cantidadCerdos; p++)
    {
      if(estado == 1)
      {
        var px = aleatorio(0, 10) * 60;
        var py = aleatorio(0, 10) * 60
        estado = 1;
        var polloX = px;
        var polloY = py;
        papel.drawImage(pollo.imagen, polloX, polloY);
      }
      papel.drawImage(pollo.imagen, polloX, polloY);
    }
  }
  if(persona.cargaOK = true)
  {
    var x = xPersona;
    var y = yPersona;
    papel.drawImage(persona.imagen, x, y);
    papel.drawImage(persona.imagen, x, y);
  }

}





 //Aleatorio
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
