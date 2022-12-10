function countTime(leds) {
  const offLeds = leds.join("").split("1");
  return (
    Math.max(
      ...offLeds.map((led) => led.length),
      (offLeds[0] + offLeds.at(-1)).length
    ) * 7
  );
}
