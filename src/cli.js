import readlineSync from 'readline-sync';

const welcome = () => {
  const name = readlineSync.question('May I have your name? ');

  return console.log(`Hello ${name}!`);
};

export default welcome;
