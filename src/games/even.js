import main from './../engine.js'

const ruleEven = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes'
  }
  return 'no'
}

export default () => {
  main(
    function () {
      const question = Math.floor(Math.random() * 101)
      const correctAnswer = isEven(question)
      return [question, correctAnswer]
    },
    ruleEven,
  )
}
