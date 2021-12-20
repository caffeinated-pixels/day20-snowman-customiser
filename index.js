// const inputs = document.querySelectorAll('.controls input')
const eyeColorInput = document.getElementById('eye-color')
const eyes = document.querySelectorAll('.eye')
eyeColorInput.addEventListener('change', changeEyeColor)

const pupilColorInput = document.getElementById('pupil-color')
const pupils = document.querySelectorAll('.pupil')
pupilColorInput.addEventListener('change', changePupilColor)

const noseColorInput = document.getElementById('nose-color')
const nose = document.getElementById('nose')
noseColorInput.addEventListener('change', changeNoseColor)

const buttonColorInput = document.getElementById('button-color')
const buttons = document.querySelectorAll('.button')
buttonColorInput.addEventListener('change', changeButtonColor)

function changeEyeColor(e) {
  console.log(e.target.value)
  eyes.forEach((eye) => (eye.style.backgroundColor = e.target.value))
}

function changePupilColor(e) {
  console.log(e.target.value)
  pupils.forEach((pupil) => (pupil.style.backgroundColor = e.target.value))
}

function changeNoseColor(e) {
  nose.style.borderColor = `transparent transparent transparent ${e.target.value}`
}

function changeButtonColor(e) {
  buttons.forEach((button) => (button.style.backgroundColor = e.target.value))
}

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
