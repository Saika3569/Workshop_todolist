// TO DO
window.addEventListener("DOMContentLoaded",function(){
  document.querySelector('ul').addEventListener('click',function(even){
    let li = even.target
    li.classList.toggle('checked')
  })
  let x = document.querySelectorAll('.close')
  x.forEach(y => { y.addEventListener('click',function(){
    document.querySelector('li').remove()
    })
  });
})