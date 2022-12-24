function printTable(gifts) {
  const tGift = "Gift";
  const tQuantity = "Quantity";
  const giftLength = tGift.length;
  const quantityLength = tQuantity.length;
  const maxGift = Math.max(giftLength, ...gifts.map(({ name }) => name.length));
  const maxQuantity = Math.max(
    quantityLength,
    ...gifts.map(({ quantity }) => String(quantity).length)
  );
  let table =
    `${"+".repeat(maxGift + maxQuantity + 7)}\n` +
    `| ${tGift}${" ".repeat(maxGift - giftLength)} |` +
    ` ${tQuantity}${" ".repeat(maxQuantity - quantityLength)} |\n` +
    `| ${"-".repeat(maxGift)} | ${"-".repeat(maxQuantity)} |\n`;
  gifts.forEach(({ name, quantity }) => {
    const nLength = name.length;
    const qLength = String(quantity).length;
    table +=
      `| ${name}${" ".repeat(maxGift - nLength)} |` +
      ` ${quantity}${" ".repeat(maxQuantity - qLength)} |\n`;
  });
  table += `${"*".repeat(maxGift + maxQuantity + 7)}`;
  return table;
}
