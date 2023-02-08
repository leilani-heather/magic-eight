// /*Removing duplicate code and refactoring the functions to make them more concise*/

// const submitUserName = () => {
//   const input = getInputElement('userName');
//   if (!input) return;
//   const userName = input.value;
//   if (!userName) return console.error('The input element does not have a value');
//   greetUser(userName);
//   input.value = '';
//   toggleDisplay('userNameForm', 'questionForm');
// };

// const askQuestion = () => {
//   const input = getInputElement('question');
//   const question = getElementById('askQuestion');
//   if (!input || !question) return console.error('Unable to find the input or question element');
//   const userQuestion = input.value;
//   if (!userQuestion) return (question.innerHTML = `You actually have to ask me a question, soz!`);
//   question.innerHTML = `So you want to know '${userQuestion.toLowerCase()}' <br>Hmm, let me see...`;
//   input.value = '';
//   toggleDisplay('questionForm');
//   doMagic();
// };

// const toggleDisplay = (hideId: string, showId?: string) => {
//   const hideElement = document.getElementById(hideId);
//   if (!hideElement) return console.error(`The element with id "${hideId}" was not found`);
//   hideElement.style.display = 'none';
//   if (showId) {
//     const showElement = document.getElementById(showId);
//     if (!showElement) return console.error(`The element with id "${showId}" was not found`);
//     showElement.style.display = 'block';
//   }
// };

// const getElementById = (id: string) => {
//   const element = document.getElementById(id);
//   if (!element) return console.error(`Element with id "${id}" was not found`);
//   return element;
// };

// const getInputElement = (name: string) => {
//   const input = document.querySelector(`input[name='${name}']`);
//   if (!(input instanceof HTMLInputElement)) return console.error(`Unable to find input[name='${name}']`);
//   return input;
// };

// const greetUser = (userName: string) => {
//   const greetUserElement = document.getElementById('greetUser')
//   if (greetUserElement) {
//     userName
//       ? (greetUserElement.innerHTML = `Hello, ${userName}!`)
//       : (greetUserElement.innerHTML = `Why won't you tell me your name?! <br>You actually have to!`)
//   }
// }

// const doMagic = () => {
//   const answers = [
//     'It is certain',
//     'It is decidedly so',
//     'Reply hazy try again',
//     'Cannot predict now',
//     'Do not count on it',
//     'My sources say no',
//     "OMG that's gross",
//     'Signs point to yes',
//     "Don't rely on me. I'm a switch statement tbh.",
//   ];
//   const answer = answers[Math.floor(Math.random() * answers.length)];
//   const answerElement = getElementById('oracles-answer');
//   if (!answerElement) {
//     console.error('Unable to find the oracles-answer element')
//     return
//   }
//   answerElement.innerHTML = answer;
// }
