import readlineSync from 'readline-sync';

export default () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    const answer = `Hello, ${name}!`
    console.log(answer);
}
