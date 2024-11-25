let randomDrumsNumber = document.querySelectorAll('.drum').length

for (let i = 0; i < randomDrumsNumber; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        let buttonInnerHtml = this.innerHTML
        reproduceSounds(buttonInnerHtml) //passei ou cliquei a tecla 'w'
        buttonAnimation(buttonInnerHtml)
    })
}
    document.addEventListener('keydown', function(event) {
        reproduceSounds(event.key) //recebi 'w'
        buttonAnimation(event.key)
    })

function reproduceSounds(key) {
    switch (key) {
        case 'w':
             let tom1 = new Audio('/sounds/tom-1.mp3')
             tom1.play() //reproduzo o som da 'w'
            break;

        case 'a':
            let tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play()
            break;

        case 's':
            let tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play()
            break;

        case 'd':
            let tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play()
            break;

        case 'j':
            let snare = new Audio('/sounds/snare.mp3')
            snare.play()
            break;  

        case 'k':
            let crash = new Audio('/sounds/crash.mp3')
            crash.play()
            break;

        case 'l':
            let kick = new Audio('/sounds/kick-bass.mp3')
            kick.play()
            break;
        default:
            console.log(buttonInnerHtml)
    }
}

function buttonAnimation(currentKey) { // aqui é para ativar a animação da class pressed
    let activeButton = document.querySelector('.' + currentKey)

    activeButton.classList.add('pressed')
    setTimeout(() => {
            activeButton.classList.remove('pressed')
    }, 100);
}



/* let audio = new Audio('/sounds/tom-1.mp3')
audio.play()
 */
