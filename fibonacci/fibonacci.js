var x = 0;
var y = 1;
var z;
var cantidad = parseInt(prompt("Numeros Fibonacci")/3);
for(i=0;i<cantidad;i++)
  {
    z = x + y;
    y = z + x;
    x = z + y;
    document.write(+ z + "\n,");
    document.write(+ y + "\n,");
    document.write(+ x + "\n,");
  }
