import main from './../engine.js'
import { getRandomNumber } from './../utils.js'

const ruleProgression = 'What number is missing in the progression?'

const getProgression = (startNumber, step, length, missingIndex) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(startNumber + (i * step))
  }
  const correctAnswer = progression[missingIndex]
  progression[missingIndex] = '..'
  return [progression.join(' '), correctAnswer]
}

export default () => {
  main(
    function () {
      const startNumber = getRandomNumber(1, 50)
      const step = getRandomNumber(1, 10)
      const length = getRandomNumber(9, 11)
      const missingIndex = getRandomNumber(0, length - 1)
      return getProgression(startNumber, step, length, missingIndex)
    },
    ruleProgression,
  )
}
