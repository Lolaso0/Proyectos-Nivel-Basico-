//Libreria express
var express = require("express");
var aplicacion = express();

//URL's
aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);
aplicacion.get("/cajero", cajero);


//Resultado de URL
function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>home</strong> genial!!!")
}

function cursos(peticion,resultado)
{
  resultado.send("Estos son los <strong>cursos</strong>");
}

function cajero(peticion,resultado)
{
  resultado.sendfile("atm/atm.html");
}
//Ejecucion de server
aplicacion.listen(8989);
