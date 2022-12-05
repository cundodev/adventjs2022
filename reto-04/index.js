function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))
    .every((box, index) =>
        !index ||
        box.l > boxes[index - 1].l &&
        box.w > boxes[index - 1].w &&
        box.h > boxes[index - 1].h
    )
}
