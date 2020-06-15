var ran1 = Math.floor(Math.random() * 6) + 1;
ran1 = "images/dice" + ran1 + ".png";
document.querySelector(".img1").setAttribute("src",ran1);

var ran2 = Math.floor(Math.random()*6) + 1;
ran2 = "images/dice" + ran2 + ".png";
document.querySelector(".img2").setAttribute("src",ran2);

if(ran1>ran2){
  document.querySelector("h1").innerHTML = "Player1 wins!";
}

else if(ran2>ran1){
  document.querySelector("h1").innerHTML = "Player2 wins!";
}

else {
  document.querySelector("h1").innerHTML = "Draw :/";
}
