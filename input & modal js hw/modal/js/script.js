let butt = document.querySelector('button')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close-modal')


butt.addEventListener('click', function(){
  modal.style.display = 'block'
})

close.addEventListener('click', function(){
  modal.style.display = 'none'
})