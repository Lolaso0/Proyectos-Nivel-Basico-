
//Declarar variables y objetos
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

//boton reload//
var boton = document.getElementById("botoncito");
boton.addEventListener("click", recargar);

function recargar()
{
  location.reload();
}

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

var cantidadCerdos = aleatorio(1, 5);
var cantidadPollos = aleatorio(1, 5);
var cantidadVacas = aleatorio(1, 5);

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
}
function cargarVacas()
{
  vaca.cargaOK = true;
  mantenerPosicion();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  mantenerPosicion();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  mantenerPosicion();
}
function cargarPersona()
{
  persona.cargaOK = true;
  dibujar();
}

var xPersona = 400;
var yPersona = 400;
var xVaca = new Array();
var yVaca = new Array();
var xCerdo = new Array();
var yCerdo = new Array();
var xPollo = new Array();
var yPollo = new Array();

//Teclas del personaje
var movimiento = 20;
document.addEventListener("keydown", teclas)
function teclas(evento)
{
  switch(evento.keyCode)
  {
    case wasd.w:
    yPersona = yPersona - movimiento;
    dibujar();
    break;

    case wasd.s:
    yPersona = yPersona + movimiento;
    dibujar();
    break;

    case wasd.a:
    xPersona = xPersona - movimiento;
    dibujar();
    break;

    case wasd.d:
    xPersona = xPersona + movimiento;
    dibujar();
    break;
  }
}

//mantener Posicon generar numeros de posicion
function mantenerPosicion()
{
  if(vaca.cargaOK)
  {
    for(var i=0; i < cantidadVacas; i++)
    {
      var x = aleatorio(0, 25);
      var y = aleatorio(0, 25);
      var x = x * 30;
      var y = y * 20;
      xVaca[i] = x;
      yVaca[i] = y;
    }
    if(cerdo.cargaOK)
    {
      for(var i=0; i < cantidadCerdos; i++)
      {
        var x = aleatorio(0, 25);
        var y = aleatorio(0, 25);
        var x = x * 30;
        var y = y * 20;
        xCerdo[i] = x;
        yCerdo[i] = y;
      }
    }
    if(pollo.cargaOK)
    {
      for(var i=0; i < cantidadPollos; i++)
      {
        var x = aleatorio(0, 25);
        var y = aleatorio(0, 25);
        var x = x * 30;
        var y = y * 20;
        xPollo[i] = x;
        yPollo[i] = y;
      }
    }
  }
  dibujar();
}

//dibujo
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    for(var i=0;i < cantidadVacas;i++)
    {
      papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
    }
  }
  if(cerdo.cargaOK)
  {
    for(var i=0;i < cantidadCerdos;i++)
    {
      papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
    }
  }
  if(pollo.cargaOK)
  {
    for(var i=0;i < cantidadPollos;i++)
    {
      papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
    }
  }
  if(persona.cargaOK)
  {
    papel.drawImage(persona.imagen, xPersona, yPersona);
  }
}


 //Aleatorio
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
