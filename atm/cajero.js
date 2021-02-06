//Clase Billete
class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}


//Definir Billetes y cantidad de Billetes
var dolar = [];
dolar[0] = new Billete(5, 100);
dolar[1] = new Billete(1, 100);
console.log(dolar);

//Dinero Usuario
var dinero = parseInt(prompt("Dinero?"));

//Funcionamiento
var i = 0;
var papeles;
var entregado = [];

for(d of dolar)
{
  var plata = dolar[i];
  if(dinero > 0)
  {
    div = Math.floor(dinero/plata.valor);
    if(div > plata.cantidad)
    {
      papeles = plata.cantidad;
    }
    else
    {
      papeles = div;
    }
    entregado.push(new Billete(plata.valor, papeles));

    document.write("Cantidad: " + entregado[i].cantidad + " De: " + entregado[i].valor + " $" + "<br>");
    dinero = dinero - (plata.valor * papeles);
  }
  i = i + 1;
}
