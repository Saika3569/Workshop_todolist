// TO DO
window.addEventListener("DOMContentLoaded",function(){
  document.querySelector('ul').addEventListener('click',function(even){
    let li = even.target
    li.classList.toggle('checked')
  })

    let x = document.querySelectorAll('.close')
    x.forEach(y => { y.addEventListener('click',function(even){
      even.target.parentNode.remove()
      })
    })


  document.querySelector('.addBtn').addEventListener('click',function(){
    let li = document.createElement('li')
    let button = document.createElement('span')
    const value = document.getElementById('input')
    li.innerHTML = value.value
    button.classList.add('close')
    button.innerHTML = "x"
    li.insertAdjacentElement('beforeend',button)
    if (value != '') {
    document.querySelector('ul').insertAdjacentElement('beforeend',li)
    }
    li.querySelector('.close').addEventListener('click',function(even){
      even.target.parentNode.remove()
    })
    value.value= ""
  })
  
})