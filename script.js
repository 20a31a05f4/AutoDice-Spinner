var randomNumber1 = Math.ceil(Math.random() * 6);
var random_dice1 = "./images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_dice1);

var randomNumber2 = Math.ceil(Math.random() * 6);
var random_dice2 = "./images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", random_dice2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="It's a Draw";
}