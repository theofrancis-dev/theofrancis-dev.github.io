//alert("js file loaded!");

let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
timeFlash = 75;
let gameStarted = false;
let level = 0;

$(document).keypress(function (event) {
    if (!gameStarted) {
        $('h1').text("Level " + level);
        gameStarted = true;
        nextSequence();        
    }
});

$(".btn").click(function (event) {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

    //we can also use var userChosenColour = $(this).attr("id"); without the need of event argument            
}
);

function nextSequence() {

    userClickedPattern = [];
    level++;
    $('h1').text("Level " + level);

    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $('#' + randomChosenColour).fadeOut(timeFlash).fadeIn(timeFlash).fadeOut(timeFlash).fadeIn(timeFlash);
    playSound(randomChosenColour);
       
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(() => {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    //check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);
        $('h1').text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}



