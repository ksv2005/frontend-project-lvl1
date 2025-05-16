import main from './../engine.js'
import { getRandomNumber } from './../utils.js'

const operations = ['+', '-', '*']
const ruleCalc = 'What is the result of the expression?'

const calculateExpression = (expression) => {
  const [firstNumber, operation, secondNumber] = expression.split(' ')
  if (operation === '+') {
    return Number(firstNumber) + Number(secondNumber)
  }
  else if (operation === '-') {
    return Number(firstNumber) - Number(secondNumber)
  }
  else if (operation === '*') {
    return Number(firstNumber) * Number(secondNumber)
  }
  return 0
}

export default () => {
  main(
    function () {
      const firstNumber = getRandomNumber(0, 100)
      const operation = operations[getRandomNumber(0, 2)]
      const secondNumber = getRandomNumber(0, 100)
      const question = `${firstNumber} ${operation} ${secondNumber}`
      const correctAnswer = calculateExpression(question)
      return [question, correctAnswer]
    },
    ruleCalc,
  )
}
