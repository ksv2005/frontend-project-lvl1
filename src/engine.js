import readlineSync from 'readline-sync'

const msxRoundCount = 3

export default (game, rule) => {
  console.log('Welcome to the Brain Game!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(rule)
  let currentRoundCount = 0
  while (currentRoundCount < msxRoundCount) {
    const [question, correctAnswer] = game()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer ')
    if (String(userAnswer) !== String(correctAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${name}!`)
      break
    }
    console.log(`Correct!`)
    currentRoundCount++
  }
  console.log(`Congratulations, ${name}!`)
}
