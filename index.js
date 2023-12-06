document.addEventListener('DOMContentLoaded', function() {

  const TapMenu = document.querySelectorAll('.Reactions_Tap_Menu p')

  TapMenu[1].style.backgroundColor = 'blue'

  TapMenu.forEach((p, i) => {
    p[i].addEventListener('click', function() {
      for(let i = 0; TapMenu.length; i++) {
      }
    })
  })

})