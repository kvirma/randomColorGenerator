
let body = document.querySelector('body')
let btn = document.querySelector('#btn')
let h1 = document.querySelector('#h1')

function changeColor(){
    let rgb1 = Math.floor(Math.random() * 256)
    let rgb2 = Math.floor(Math.random() * 256)
    let rgb3 = Math.floor(Math.random() * 256)
    let newColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
    body.style.backgroundColor = newColor
    h1.innerText = newColor
    let sum = rgb1+rgb2+rgb3 
    if(sum < 250){
        h1.style.color = 'white'
    }else {
        h1.style.color = "black"
    }
}

btn.addEventListener('click', changeColor)