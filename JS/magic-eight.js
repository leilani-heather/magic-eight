let userName = ''
let userQuestion = ''
let test = 0
// let randomNumber = Math.floor(Math.random() * 8) ** Added into doMagic

const submitUserName = () => {
  let userName = document.querySelector("input[name='userName']").value
  greetUser(userName)
  test = Number(userName)
  userName = ''
  hide('userNameForm')
}

function hide (element) {
  document.getElementById(element).style.display = 'none'
}

// const hideUserName = () => {
//   document.getElementById('userNameForm').style.display = 'none'
// }

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
  hide('questionForm')
  doMagic()
}

// const hideQuestion = () => {
//   document.getElementById('questionForm').style.display = 'none'
// }

const doMagic = () => {
  const random = Math.floor(Math.random() * 8)
  let answer = ''
  switch (test) {
    case 0:
      answer = 'It is certain'
      break
    case 1:
      answer = 'It is decidedly so'
        break
    case 2:
      answer = 'Reply hazy try again'
        break
    case 3:
      answer = 'Cannot predict now'
        break
    case 4:
      answer = 'Do not count on it'
        break
    case 5:
      answer = 'My sources say no'
        break
    case 6:
      answer = "OMG that's gross"
        break
    case 7:
      answer = 'Signs point to yes'
        break
    default:
      answer = `Don't rely on me. I'm a switch statement tbh.`
  }
  document.getElementById('oracles-answer').innerHTML = answer
}

// To do:
// Ask another question feature
// CSS the answer over the ball
// Fix the form clearing bug
// Why cant i make a variable for the switch to use?
// hiding should be able to use the same function, double up
