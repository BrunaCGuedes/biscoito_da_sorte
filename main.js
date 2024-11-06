function handleClick(event, opcao) {
  event.preventDefault()
  const screen1 = document.querySelector(".screen1")
  const screen2 = document.querySelector(".screen2")
  if(opcao==='open'){
    screen2.classList.remove('hide')
    screen1.classList.add('hide')
  }else{
    screen2.classList.add('hide')
    screen1.classList.remove('hide')
  }
}