const readlineSync = from 'readline-sync');
export const printName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name : ');
  console.log(`Hello ${name}`);
};
