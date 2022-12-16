function fixLetter(letter) {
  return letter
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s([,.?!])/g, "$1")
    .replace(/([?])+/g, "$1")
    .replace(/([.?!]\s[a-z])/g, (letter, word) => word.toUpperCase())
    .replace(/^([A-z])/g, (letter, word) => word.toUpperCase())
    .replaceAll("santa", "Santa")
    .replaceAll("claus", "Claus")
    .replace(/([A-z])$/g, (letter, word) => word + ".");
}
