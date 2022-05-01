let isDrag = false
const div1 = document.querySelector('#div1')
div1.addEventListener("mousedown", function(){
    isDrag = true
})
document.addEventListener("mouseup", function(){
    isDrag = false
})
document.addEventListener("mousemove", function(e){
    if(isDrag){
        div1.style.left = (e.pageX-50) + 'px';
        div1.style.top = (e.pageY-50) + 'px';      
    }
})

let isAnotherDrag = false
const div2 = document.querySelector('#div2')
div2.addEventListener("mousedown", function(){
    isAnotherDrag = true
})
document.addEventListener("mouseup", function(){
    isAnotherDrag = false
})
document.addEventListener("mousemove", function(foo){
    if(isAnotherDrag){
        div2.style.left = (foo.pageX-150) + 'px';
        div2.style.top = (foo.pageY-150) + 'px';      
    }
})