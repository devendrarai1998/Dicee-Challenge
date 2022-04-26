//for iamge1:
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "Dice" + randomnumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage ;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSource);

//for image2:
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "Dice" + randomnumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage ;
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImageSource);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player1 wins!";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}