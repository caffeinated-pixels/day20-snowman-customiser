// const inputs = document.querySelectorAll('.controls input')
const eyeColorInput = document.getElementById('eye-color')
eyeColorInput.addEventListener('change', changeEyeColor)

const eyes = document.querySelectorAll('.eye')

function changeEyeColor(e) {
  console.log(e.target.value)
  eyes.forEach((eye) => (eye.style.backgroundColor = e.target.value))
}

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
