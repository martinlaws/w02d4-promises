const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

// r.q('q1').then(() => { }).then().then()

rlp.questionAsync('What do you think of Node.js? ')
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your name? ');
  }) // => NEW promise
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite activity? ');
  }) // => NEW promise
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What do you listen to while doing that? ');
  }) // => NEW promise
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('Which meal is your favourite? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite thing to eat for that meal? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('Which sport is your absolute favourite? ');
  })
  .then((answer) => {
    answers.push(answer);
    rlp.close();
    const [node, name, activity, music, meal, food, sport] = answers;

    console.log();
    console.log('Your profile is ready!!');
    console.log(`My name is ${name} and I really like ${activity}! I listen to ${music} while eating ${food} during ${meal} and playing ${sport}... and I think Node is ${node}!!`);
  });