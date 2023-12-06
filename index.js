document.addEventListener('DOMContentLoaded', function() {

  const TapMenu = document.querySelector('.Reactions_Tap_Menu p')

  TapMenu.style.backgroundColor = 'blue'


  TapMenu.forEach((p, i) => {
    p[i].addEventListener('click', function() {
      for(let i = 0; TapMenu.length; i++) {

        let tap = 1;

        if (tap = 1) {
          TapMenu[0].style.backgroundColor = 'red'
          TapMenu[1].style.backgroundColor = 'blue'
        } else if (tap = 0) {
          TapMenu[1].style.backgroundColor = 'red'
          TapMenu[0].style.backgroundColor = 'blue'
        }

      }
    })
  })

})