

const button = document.querySelector('button')

const body = document.querySelector('body')

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black']


body.style.backgroundColor = 'black'
button.addEventListener('click', changeBackground)


function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}