
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

var cantidadVacas = aleatorio(1, 5);
var cantidadCerdos = aleatorio(1, 5);
var cantidadPollos = aleatorio(1, 5);

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
function cargarCerdos()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarPersona()
{
  persona.cargaOK = true;
  dibujar();
}

var personaX = 400;
var personaY = 400;

var polloX;
var polloY;

var cerdoX;
var cerdoY;

function dibujar()
{
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidadVacas + " Vacas");
    for(var v=0; v < cantidadVacas; v++)
    {
      var vx = aleatorio(0, 10) * 60;
      var vy = aleatorio(0, 10) * 60;
      papel.drawImage(vaca.imagen, vx, vy);
      return vx;
    }
  }
  if(cerdo.cargaOK = true)
  {
    for(var c=0; c < cantidadCerdos; c++)
    {
      var x = aleatorio(0, 20);
      var y = aleatorio(0, 20);
      var cerdoX = x * 35;
      var cerdoY = y * 25;
      papel.drawImage(cerdo.imagen, cerdoX, cerdoY);
    }
  }
  if(pollo.cargaOK = true)
  {
    for(var p=0; p < cantidadPollos; p++)
    {
      var x = aleatorio(0, 20);
      var y = aleatorio(0, 20);
      var polloX = x * 35;
      var polloY = y * 25;
      papel.drawImage(pollo.imagen, polloX, polloY);
    }
  }
  if(persona.cargaOK = true)
  {
    var x = personaX;
    var y = personaY;
    papel.drawImage(persona.imagen, x, y);
  }
  return;
}

console.log(vx);



var movimiento = 15;
document.addEventListener("keydown", teclas)
function teclas(evento)
{
  console.log(evento);
  if (evento.keyCode == wasd.w)
  {
    personaY = personaY - movimiento;
    dibujarPersona();
  }
  else if (evento.keyCode == wasd.s)
  {
    personaY = personaY + movimiento;
    dibujarPersona();
  }
  else if (evento.keyCode == wasd.a)
  {
    personaX = personaX - movimiento;
    dibujarPersona();
  }
  else if (evento.keyCode == wasd.d)
  {
    personaX = personaX + movimiento;
    dibujarPersona();
  }
}

function dibujarPersona()
{
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(persona.cargaOK = true)
  {
    var x = personaX;
    var y = personaY;
    papel.drawImage(persona.imagen, x, y);
  }
  if(vaca.cargaOK)
  {
    for(var v=0; v < cantidadVacas; v++)
    {
      papel.drawImage(vaca.imagen, vx, vy);
    }
  }
  if(cerdo.cargaOK = true)
  {
    for(var c=0; c < cantidadCerdos; c++)
    {
      papel.drawImage(cerdo.imagen, cerdoX, cerdoY);
    }
  }
  if(pollo.cargaOK = true)
  {
    console.log(cantidadPollos + " Pollos");
    for(var p=0; p < cantidadPollos; p++)
    {
      papel.drawImage(pollo.imagen, polloX, polloY);
    }
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
