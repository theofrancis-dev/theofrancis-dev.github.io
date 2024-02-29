
soundUrl = "";

buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {        
        k = event.target.innerText;
        play(k);
        buttonAnimation(event.target);
    });
});

document.addEventListener('keydown', (event) => {
    k = event.key.toLowerCase();
    b = document.querySelector("." + k);
    if (b) {       
        play(k);
        buttonAnimation(b);
    }       
});


function play(k) {
    soundUrl = "";
    switch (k) {
        case 'w': soundUrl = "sounds/tom-1.mp3";
            break;
        case 'a': soundUrl = "sounds/tom-2.mp3";
            break;
        case 's': soundUrl = "sounds/tom-3.mp3";
            break;
        case 'd': soundUrl = "sounds/tom-4.mp3";
            break;
        case 'j': soundUrl = "sounds/crash.mp3";
            break;
        case 'k': soundUrl = "sounds/kick-bass.mp3";
            break;
        case 'l': soundUrl = "sounds/snare.mp3";
            break;
    }
    if (soundUrl) {
        var a = new Audio(soundUrl);
        a.play();        
    }
    return;
}

function buttonAnimation(b) {
    let activeButton = b;
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}