const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')

document.addEventListener('mousedown', function(e){
    switch(e.witch){
        case 1:
            first.style.left = e.pageX + "px";
            first.style.top = e.pageY + "px";
        case 2:
            second.style.left = e.pageX + "px";
            second.style.top = e.pageY + "px";
        case 3:
            third.style.left = e.pageX + "px";
            third.style.top = e.pageY + "px";
    }

});


// не понимаю тоже как это ещё можно по-другом сделать(
// в интернете ничего похожего не нашел