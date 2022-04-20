
const dinamic = document.querySelector(".dinamic")
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
let block = document.querySelectorAll('.block')

green.addEventListener("mouseover", function () {
    dinamic.style.backgroundColor = 'green'
});

red.addEventListener("mouseover", function () {
    dinamic.style.backgroundColor = 'red'
});

yellow.addEventListener("mouseover", function () {
    dinamic.style.backgroundColor = 'yellow'
});

//не понимаю почему не работает =( , должно работать. объясните пожалуйста

block.forEach(function (color) {
    color.addEventListener("mouseout", function (){
        dinamic.style.backgroundColor = 'gray'
    })
})