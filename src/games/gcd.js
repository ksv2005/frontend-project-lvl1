import main from './../engine.js'
import { getRandomNumber } from './../utils.js'

const ruleGcd = 'Find the greatest common divisor of given numbers.'

const calculateGcd = (firstNumber, secondNumber) => {
  while (Number(secondNumber) !== 0) {
    const temp = Number(firstNumber) % Number(secondNumber)
    firstNumber = Number(secondNumber)
    secondNumber = temp
  }
  return firstNumber
}

export default () => {
  main(
    function () {
      const firstNumber = getRandomNumber(101)
      const secondNumber = getRandomNumber(101)
      const question = `${firstNumber} ${secondNumber}`
      const correctAnswer = calculateGcd(firstNumber, secondNumber)
      return [question, correctAnswer]
    },
    ruleGcd,
  )
}
