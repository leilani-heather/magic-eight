let userName = ''
let userQuestion = ''
const submitUserName = () => {
  const userNameInput = document.querySelector("input[name='userName']")
  if (!(userNameInput instanceof HTMLInputElement)) {
    console.error(`Unable to find the input[name='userName']`)
    return
  }
  let userName = userNameInput.value
  if (!userName) {
    greetUser(userName)
    console.error(`The input element does not have a value`)
    return
  }
  greetUser(userName)
  userNameInput.value = ''
  hide('userNameForm')
  show('questionForm')
}
const hide = (element) => {
  const hidden = document.getElementById(element)
  if (!hidden) {
    console.error(`The element with id "${element}" was not found`)
    return
  }
  hidden.style.display = 'none'
}
const show = (element) => {
  const showing = document.getElementById(element)
  if (!showing) {
    console.error(`The element with id "${element}" was not found`)
    return
  }
  showing.style.display = 'block'
}
const greetUser = (userName) => {
  const greetUserElement = document.getElementById('greetUser')
  if (greetUserElement) {
    userName
      ? (greetUserElement.innerHTML = `Hello, ${userName}!`)
      : (greetUserElement.innerHTML = `Why won't you tell me your name?! <br>You actually have to!`)
  }
}
const askQuestion = () => {
  const userQuestionInput = document.querySelector("input[name='question']")
  const question = document.getElementById('askQuestion')
  if (
    !(userQuestionInput instanceof HTMLInputElement) ||
    !(question instanceof HTMLElement)
  ) {
    console.error(
      'Unable to find the userQuestion input element or question element'
    )
    return
  }
  let userQuestion = userQuestionInput.value
  if (!userQuestion) {
    question.innerHTML = `You actually have to ask me a question, soz!`
    return
  }
  question.innerHTML = `So you want to know '${userQuestion.toLowerCase()}' <br>Hmm, let me see...`
  userQuestionInput.value = ''
  hide('questionForm')
  doMagic()
}
const doMagic = () => {
  let answer = ''
  switch (Math.floor(Math.random() * 8)) {
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
  const answerElement = document.getElementById('oracles-answer')
  if (!answerElement) {
    console.error('Unable to find the oracles-answer element')
    return
  }
  answerElement.innerHTML = answer
}
const askAgain = () => {
  window.location.reload()
}
