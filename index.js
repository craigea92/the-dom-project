// Player 1 Dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1 - dice6.png

let image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomDiceImage)

// Player 2 Dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png" //dice1 - dice6.png

let image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomDiceImage2)