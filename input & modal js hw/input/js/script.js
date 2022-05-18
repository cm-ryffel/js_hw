let inputName = document.querySelector('#name');
let regex =  /[0-9]/g;
inputName.oninput = function(){
    this.value = this.value.replace(regex, '')
}

