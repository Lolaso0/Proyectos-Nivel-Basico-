var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
  switch (evento.keyCode)
  {
    case teclas.UP:
      console.log("Vamo pa arrrriba");
    break;

    case teclas.DOWN:
      console.log("Vamo pah bajoh");
    break;

    case teclas.LEFT:
      console.log("Vamo pa izquielda");
    break;

    case teclas.RIGHT:
      console.log("Vamo pa delechah");
    break;
    
    default:
      console.log("Otra TECLA");
    break;
  }
}
