function generarNumero(numero) {
  return (Math.random() * numero).toFixed(0);
}

export function colorRGB() {
  var coolor =
    "(" +
    generarNumero(255) +
    "," +
    generarNumero(255) +
    "," +
    generarNumero(255) +
    ")";
  return "rgb" + coolor;
}
