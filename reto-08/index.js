function checkPart(part) {
  return part
    .split('')
    .some((_, index, p) => {
      const newPart = p.filter((_, i) => index !== i).join('')
      return newPart.split('').reverse().join('') === newPart
    })
}