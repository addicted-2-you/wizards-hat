export function getRandomNumberInInterval(min: number, max: number) {
  return Math.ceil((max - min) * Math.random()) - 1;
}
