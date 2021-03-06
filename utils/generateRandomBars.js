const DEFAULT_MIN_BARS = 40;
const DEFAULT_MAX_BARS = 90;

export const generateRandomBars = () => {
  const bars = [];

  let numBars = getRandomInt(DEFAULT_MIN_BARS, DEFAULT_MAX_BARS);

  for (let i = 0; i < numBars; i++) {
    bars.push(getRandomInt(5, 80));
  }

  return bars;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
