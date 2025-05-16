export const getRandomNumber = (min, max) => {
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return Number(min + (array[0] % (max - min + 1)))
}
