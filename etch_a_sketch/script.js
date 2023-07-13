/*------------Buttons----------*/
/*color mode */

const colorModeBtn = document.querySelector('#colorMode')
colorModeBtn.addEventListener('click', () => {
  const colorValue = document.querySelector('#colorWheel').value
  draw_color()
  eraserBtn.style.background = ''
  colorModeBtn.style.background = 'white'
  rainbowModeBtn.style.background = ''
})

/*Rainbow Mode */

const rainbowModeBtn = document.querySelector('#rainbowMode')
rainbowModeBtn.addEventListener('click', () => {
  draw_rainbow()
  eraserBtn.style.background = ''
  colorModeBtn.style.background = ''
  rainbowModeBtn.style.background = 'white'
})

/*Eraser button */
const eraserBtn = document.querySelector('#eraser')
eraserBtn.addEventListener('click', () => {
  eraser()
  eraserBtn.style.background = 'white'
  colorModeBtn.style.background = ''
  rainbowModeBtn.style.background = ''
})

/* Clear Button */
const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
  slider()
})

/* Slider */
const sliderText = document.querySelector('#sizeValue')
const sliderController = document.querySelector('#slider')
let currentSize

function slider() {
  let sliderValue = sliderController.valueAsNumber
  sliderText.textContent = `${sliderValue}x${sliderValue}`
  currentSize = sliderValue
  Reload_Grid()
}

/*-------------GRID----------*/
/* seletor */

const grid = document.querySelector('#grid')

/*-------Change Size-------*/

function change_Grid_Size(currentSize) {
  let sliderValue = sliderController.valueAsNumber
  let size = currentSize * currentSize

  grid.style.gridTemplateColumns = `repeat(${sliderValue},1fr)`
  grid.style.gridTemplateRows = `repeat(${sliderValue},1fr)`

  for (i = 0; i < size; i++) {
    const newSquare = document.createElement('div')
    newSquare.classList.add('gridSquare')
    grid.appendChild(newSquare)
  }
}

function Reset_Grid() {
  grid.innerHTML = ''
}

function Reload_Grid() {
  Reset_Grid()
  change_Grid_Size(currentSize)
}

/*---------------Draw Mechanics --------------*/
function draw_color() {
  grid.addEventListener('mouseover', () => {
    const colorValue = document.querySelector('#colorWheel').value
    event.target.style.background = `${colorValue}`
  })
}

function draw_rainbow() {
  grid.addEventListener('mouseover', () => {
    let greenColor = parseInt(Math.random() * 255)
    let redColor = parseInt(Math.random() * 255)
    let blueColor = parseInt(Math.random() * 255)
    event.target.style.background = `rgb(${redColor}, ${greenColor}, ${blueColor})`
  })
}

function eraser() {
  grid.addEventListener('mouseover', () => {
    event.target.style.background = 'white'
  })
}
