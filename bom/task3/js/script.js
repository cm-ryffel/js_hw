const button = document.querySelector('#history')

button.addEventListener('click', function(e){
  alert(window.history.length)
  window.history.replaceState({'record':'0'},"page 0", "?record=0");
  window.history.pushState({'record':'1'},"page 1", "?record=1");
  window.history.pushState({'record':'2'},"page 2", "?record=2");
  window.history.pushState({'record':'3'},"page 3", "?record=3");
  window.history.back();
})

//я не до конца понял условие задачи, поэтому надеюсь, что всё получилось ка надо)))