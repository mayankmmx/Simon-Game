var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function nextSequence(){
  userClickedPattern = [];
  level++;
  document.querySelector("h1").textContent = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  fadeIn(document.querySelector("#" + randomChosenColour));
  playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {

  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    document.querySelector("body").classList.add("game-over");
    setTimeout(function(){
      document.querySelector("body").classList.remove("game-over");
    }, 200);
    document.querySelector("h1").textContent = "Game Over, Press Any Key to Restart";
    startOver();
  }
}

for (var i = 0;i < document.querySelectorAll(".btn").length;i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });
}

document.querySelector("h1").addEventListener("click", function(){
  if(!started) {
    document.querySelector("h1").textContent = "Level 1";
    nextSequence();
    started = true;
  }
});

document.querySelector("body").addEventListener("keypress", function(){
  if(!started) {
    document.querySelector("h1").textContent = "Level 1";
    nextSequence();
    started = true;
  }
});

function animatePress(currentColour) {
  document.querySelector("." + currentColour).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + currentColour).classList.remove("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


// fade in

function fadeIn(el) {
  var op = 0;
  el.style.opacity = op;
  el.style.display = 'inline-block';

  var timer = setInterval(function () {
    if (op >= 1.0){
      clearInterval(timer);
    }
    el.style.opacity = op;
    op = op + 0.1;
  }, 25);
}
