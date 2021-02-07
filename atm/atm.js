//Imagenes de billetes
var imagenes = [];
imagenes["dolar100"] = "dolar100.png";
imagenes["dolar50"] = "dolar50.png";
imagenes["dolar20"] = "dolar20.png";
imagenes["dolar10"] = "dolar10.png";
imagenes["dolar5"] = "dolar5.png";


//Clase Billete
class Billete
{
  constructor(n,v,c)
  {
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image;
    this.imagen.url = imagenes[this.nombre];
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
  }
}



//Valores
var caja = [];
var entregado = [];
caja.push( new Billete("dolar100", 100, 5) );
caja.push( new Billete("dolar50", 50, 20) );
caja.push( new Billete("dolar20", 20, 30) );
caja.push( new Billete("dolar10", 10, 20) );
caja.push( new Billete("dolar5", 5, 5) );
var dinero = 0;
var div = 0;
var papeles = 0;

for(c of caja)
{
  c.mostrar();
}

//Evento de CLick
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

//Parrafo para escribir
var resultado = document.getElementById("resultado");

//Funcionamiento

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      //Saber cuantos billetes tiene el Cajero
      if(div > bi.cantidad)
      {
        //No hay mas billetes
        papeles = bi.cantidad;
      }
      else
      {
        //Si tenemos los billetes
        papeles = div;
      }
      //Entrega y resta los billetes a la siguiente iteracion
      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }
  }
  //Saber si el cajero se quedo vacio
  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un malo, he sido malo y no puedo darte esa cantidad";
  }
  else
  {
    for(var e of entregado)
    {
      //No mostrar cuando son 0
      if(e.cantidad > 0)
      {
        //Mostrar Billetes
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}
