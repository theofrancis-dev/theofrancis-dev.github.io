// JavaScript source code


document.addEventListener("DOMContentLoaded", () => {
    rollDices();
});

function getRandomNum() {
    let randomNumber1 = Math.random() * 6 + 1;
    randomNumber1 = Math.floor(randomNumber1);
    return randomNumber1;
}

function getImgUrl(fileNum) {
    return "images\/dice" + fileNum + ".png";
}

function rollDices(){
    player1 = document.querySelector(".img1");
    player2 = document.querySelector(".img2");
    dice1 = getRandomNum();
    dice2 = getRandomNum();
    player1.setAttribute("src", getImgUrl(dice1));
    player2.setAttribute("src", getImgUrl(dice2));
    title = document.querySelector("h1");

    if (dice1 > dice2) {
        title.textContent = "Player 1 Wins!";
    } else if (dice1 === dice2) {
        title.textContent = "Draw!";
    } else {
        title.textContent = "Player 2 Wins!";
    }
}