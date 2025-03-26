let play = document.querySelector('audio')

play.addEventListener('click', afspelen)

function afspelen(){
    play.classList.toggle('spelen')
}

