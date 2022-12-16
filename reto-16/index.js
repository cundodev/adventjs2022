function fixLetter(letter) {
  return letter
    .trim() //Eliminar espacios al inicio y al final
    .replace(/\s+/g, " ") // Eliminar múltiples espacios en blanco y dejar sólo uno
    .replace(/\s([,.?!])/g, "$1") // Eliminando espacio antes del signo
    .replace(/([?])+/g, "$1") // Eliminar signo repetidos
    .replace(/([.?!]\s[a-z])/g, (letter, word) => word.toUpperCase()) // Mayúscula después de un signo
    .replace(/^([A-z])/g, (letter, word) => word.toUpperCase()) // Mayúscula al principio del string
    .replaceAll("santa", "Santa")
    .replaceAll("claus", "Claus")
    .replace(/([A-z])$/g, (letter, word) => word + "."); // Punto al final del string
}
