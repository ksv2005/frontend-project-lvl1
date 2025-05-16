import main from './../engine.js'
import { getRandomNumber } from './../utils.js'

const rulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return 'no'
  }
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}

export default () => {
  main(
    function () {
      const number = getRandomNumber(0, 100)
      const correctAnswer = isPrime(number)
      return [number, correctAnswer]
    },
    rulePrime,
  )
}
