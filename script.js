const clicCookie= document.querySelector('#clicCookie')
const newCookie= document.querySelector('#newCookie')
let msg = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Faça sempre o seu melhor!.',
  'O exito de amanhã é a determinação de hoje',
  'Quanto mais fortes forem suas provações, maiores serão suas vitórias. '
]

let txt = document.querySelector('#txt')

  
  function fortune(){
    
    document.querySelector('.screen1').classList.add('hide')
    document.querySelector('.screen2').classList.remove('hide')

    var randomIndex = Math.floor(Math.random() * msg.length);

    document.querySelector('#txt').innerText = msg[randomIndex]
  }
  
  function buttonFortune(){
    
    document.querySelector('.screen1').classList.remove('hide')
    document.querySelector('.screen2').classList.add('hide')
    
  }
  
  clicCookie.addEventListener('click', fortune)
  
  newCookie.addEventListener('click', buttonFortune)
  


