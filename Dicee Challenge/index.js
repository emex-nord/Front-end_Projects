const array=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
const image1 = document.querySelector(".img1")
const image2 = document.querySelector(".img2")
const winner = document.querySelector("h1")

var indx1 = Math.floor(Math.random()*6)
var indx2 = Math.floor(Math.random()*6)

image1.setAttribute("src",array[indx1])
image2.setAttribute("src",array[indx2])


if (indx1 > indx2){
    winner.innerText = "Player1 Wins!"
}
else if (indx1 < indx2){
    winner.innerText = "Player2 Wins!"
} else{
    winner.innerText = "Draw"
}
