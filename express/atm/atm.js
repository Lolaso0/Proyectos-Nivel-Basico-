//Imagenes de billetes
var imagenes = [];
imagenes["dolar100"] = "./img/dolar100.png";
imagenes["dolar50"] = "./img/dolar50.png";
imagenes["dolar20"] = "./img/dolar20.png";
imagenes["dolar10"] = "./img/dolar10.png";
imagenes["dolar5"] = "./img/dolar5.png";
imagenes["dolar1"] = "./img/dolar1.png";

//Clase Billete
class Billete
{
  constructor(v, c, n)
  {
    this.nombre = n;
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.url = imagenes[this.nombre];
  }
}



//Valores y dinero del cajero
var caja = [];
var entregado = [];
caja.push( new Billete(100, 100, "dolar100") );
caja.push( new Billete(50, 150, "dolar50") );
caja.push( new Billete(20, 200, "dolar20") );
caja.push( new Billete(10, 300, "dolar10") );
caja.push( new Billete(5, 500, "dolar5") );
caja.push( new Billete(1, 1000, "dolar1"));
var dinero = 0;
var div = 0;
var papeles = 0;
var suma = 0;
var sesionTotal = 0;

//Evento de CLick
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

//Parrafo para escribir
var resultado = document.getElementById("resultado");
var actual = document.getElementById("actual");
var sesion = document.getElementById("sesion");

//Valor de inicio
for(ac of caja)
{
  suma += (ac.valor * ac.cantidad);
}
actual.innerHTML = "Dinero Actual del ATM: " + suma + "$";

//Funcionamiento
  var p = 0;
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
      entregado.push( new Billete(bi.valor, papeles, bi.nombre) );
      dinero = dinero - (bi.valor * papeles);
      //Actualiza la caja
      bi.cantidad = bi.cantidad - papeles;
    }
    console.log(caja);
  }
  //Saber si el cajero se quedo vacio
  var z = 0;
  if(dinero > 0)
  {
    resultado.innerHTML = "<strong>No Cuento con esa cantidad</strong>";
  }
  else
  {
    for(var e of entregado)
    {
      //No mostrar cuando son 0
      if(e.cantidad > 0)
      {
        //Mostrar sesion
        if(z < 1)
        {
         for(h of entregado)
          {
            sesionTotal += (h.valor * h.cantidad);
          }

            p = p+1;
            resultado.innerHTML += "Sesion " + p + "<br/>" + "<br/>";
            sesion.innerHTML += "\nDinero de Sesion " + p + ": " + sesionTotal + "<br />";
            sesionTotal = 0;
        }
        z = z+1;
        //Mostrar Billetes
        for(i = 0; i < e.cantidad ; i++)
        {
          resultado.innerHTML += "<img src=" + e.imagen.url + ">";
        }

      }

      if(e.cantidad = 0)
      {
        resultado.innerHTML = "";
      }
    }
    //Linea de separacion
    resultado.innerHTML += "<hr />"
  }
  var suma = 0;

  //Dinero actual ATM
  for(s of caja)
  {
    suma += (s.valor * s.cantidad);
  }
  actual.innerHTML = "Dinero Actual del ATM: " + suma + "$";
}
