const open = document.querySelector('#open')
const close = document.querySelector('#close')

open.addEventListener('click', function(e){
    newWin = window.open('https://itstep.org', 'StepWin', 'resizeble')
    newWin.resizeTo(640,480)
})

close.addEventListener('click',function(e){
    newWin.close()
})

