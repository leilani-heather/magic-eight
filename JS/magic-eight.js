let userName = ''
let userQuestion = ''
let randomNumber = Math.floor(Math.random() * 8)

const submitUserName = () => {
  let userName = document.querySelector("input[name='userName']").value
  greetUser(userName)
  userName = ''
  hideUserName()
  showQuestion()
}

const hideUserName = () => {
  document.getElementById('userNameForm').style.display = 'none'
}

const showQuestion = () => {
  document.getElementById('questionForm').style.display = 'block'
}

const greetUser = (userName) => {
  userName
    ? (document.getElementById('greetUser').innerHTML = `Hello, ${userName}!`)
    : (document.getElementById(
        'greetUser'
      ).innerHTML = `Why won't you tell me your name?!`)
}

const askQuestion = () => {
  let userQuestion = document.querySelector("input[name='question']").value
  document.getElementById(
    'askQuestion'
  ).innerHTML = `So you want to know '${userQuestion.toLowerCase()}' <br>Hmm, let me see...`
  userQuestion = ''
  hideQuestion()
  doMagic()
}

const hideQuestion = () => {
  document.getElementById('questionForm').style.display = 'none'
}

const doMagic = () => {
  // let eightBall = document.getElementById('oracles-answer').innerHTML // why cant I use this?
  switch (randomNumber) {
    case 0:
      return (eightball = 'It is certain')
    case 1:
      return (document.getElementById('oracles-answer').innerHTML =
        'It is decidedly so')
    case 2:
      return (document.getElementById('oracles-answer').innerHTML =
        'Reply hazy try again')
    case 3:
      return (document.getElementById('oracles-answer').innerHTML =
        'Cannot predict now')
    case 4:
      return (document.getElementById('oracles-answer').innerHTML =
        'Do not count on it')
    case 5:
      return (document.getElementById('oracles-answer').innerHTML =
        'My sources say no')
    case 6:
      return (document.getElementById('oracles-answer').innerHTML =
        'Outlook not so good')
    case 7:
      return (document.getElementById('oracles-answer').innerHTML =
        'Signs point to yes')
    default:
      return (document.getElementById(
        'oracles-answer'
      ).innerHTML = `Don't rely on me. I'm a switch statement tbh.`)
  }
}

const askAgain = () => {
  window.location.reload()
}

// To do:
// Fix the form clearing bug
// Why cant i make a variable for the switch to use?
// hiding should be able to use the same function, double up
//Add Jareds responses
