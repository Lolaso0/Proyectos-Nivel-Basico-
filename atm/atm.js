//Clase Billete
class Billete
{
  constructor(v,c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

//Valores
var caja = [];
var entregado = [];
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 2) );
var dinero = 210;
var div = 0;
var papeles = 0;

//Evento de CLick
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

//Funcionamiento

function entregarDinero()
{
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
  console.log(entregado);
}
