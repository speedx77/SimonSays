var simonArray = [];
var userSimonArray = [];
var clickCounter = 0;
var level = 1;
var gameRestart = false;

function onClick() {
  clickCounter += 1;
}

function playSimonAudio(currentSimon) {
  switch (currentSimon) {
    case "red":
      var simonAudio = new Audio("./sounds/red.mp3");
      simonAudio.volume = 0.1;
      simonAudio.play();
      break;

    case "green":
      var simonAudio = new Audio("./sounds/green.mp3");
      simonAudio.volume = 0.1;
      simonAudio.play();
      break;

    case "blue":
      var simonAudio = new Audio("./sounds/blue.mp3");
      simonAudio.volume = 0.1;
      simonAudio.play();
      break;

    case "yellow":
      var simonAudio = new Audio("./sounds/yellow.mp3");
      simonAudio.volume = 0.1;
      simonAudio.play();
      break;

    default:
      console.log(currentSimon);
  }
}

function animateSimonClick(currentSimon) {
  var simonSelect = document.querySelector("." + currentSimon);

  simonSelect.classList.add("simon-click");

  setTimeout(function () {
    simonSelect.classList.remove("simon-click");
  }, 100);
}

function selectRandomSimon() {
  randomSimon = Math.floor(Math.random() * 4);

  switch (randomSimon) {
    case 0:
      animateSimonClick("red");
      playSimonAudio("red");
      simonArray.push("red");
      console.log(simonArray);
      return "red";
      break;
    case 1:
      animateSimonClick("green");
      playSimonAudio("green");
      simonArray.push("green");
      console.log(simonArray);
      return "green";
      break;
    case 2:
      animateSimonClick("blue");
      playSimonAudio("blue");
      simonArray.push("blue");
      console.log(simonArray);
      return "blue";
      break;
    case 3:
      animateSimonClick("yellow");
      playSimonAudio("yellow");
      simonArray.push("yellow");
      console.log(simonArray);
      return "yellow";
      break;
    default:
      console.log(randomSimon);
  }
}

function beginLevel(levelNum) {
  $("h1").html("Level " + levelNum);
  //console.log("STARTING userSimonArray: " + userSimonArray)

  //userSimonArray = [];
  //clickCounter = 0;

  setTimeout(selectRandomSimon, 1000);

  $(".simon").click(function () {
    onClick();
    //console.log("click counter: " +clickCounter)
    //console.log("on click simon array length: " +simonArray.length)
    //console.log("OG clickNum: " +clickNum)

    animateSimonClick($(this).html());
    //console.log("After Animate clickNum: " +clickNum)
    playSimonAudio($(this).html());
    //console.log("After Audio clickNum: " +clickNum)
    userSimonArray.push($(this).html());
    //console.log("userSimonArray: " + userSimonArray)
    //console.log("clickCounter: " + clickCounter)
    //console.log("simonArrayLength: " + simonArray.length)
    //console.log("After Push clickNum: " +clickNum)

    if (userSimonArray[clickCounter - 1] != simonArray[clickCounter - 1]) {
      //console.log(userSimonArray[clickCounter - 1])
      // console.log(simonArray[clickCounter - 1])
      //console.log("userSimonArray: " + userSimonArray)
      //console.log("simonArray: " + simonArray)
      //console.log("failed clickCounter: " + clickCounter)
      endGame();
    }

    if (clickCounter === simonArray.length) {
      if (userSimonArray.toString() === simonArray.toString()) {
        $(".simon").off("click");
        //console.log("you won!");
        level++;
        userSimonArray = [];
        clickCounter = 0;
        //console.log("userSimonArray: " + userSimonArray)
        //console.log("clickCounter: " + clickCounter);
        //console.log("simonArray length: " + simonArray.length)
        //console.log(level);
        beginLevel(level);
      } else {
        //console.log("failed when counter=ar.length")
        endGame();
      }
    }
  });
}

function loadGame() {
  $("h1").click(function () {
    beginLevel(level);
    gameRestart = true;
    //$(document).off("keypress");
  });
}

function endGame() {
  $("h1").html("Game Over, Press Any Key to Start Over!");
  $("body").css("background-color", "red");
  $(".simon").off("click");

  var loseSound = new Audio("./sounds/wrong.mp3");
  loseSound.volume = 0.75;
  loseSound.play();

  $("h1").click(function () {
    $("h1").html("Level 1");
    $("body").css("background-color", "#292929");
    level = 1;
    clickCounter = 0;
    userSimonArray = [];
    simonArray = [];
    //beginLevel(level);

    //$(document).off("keypress");
  });
}


function codeAddress() {
  alert('ok');
}

window.onload = loadGame();

/*
if (gameRestart == false) {
  loadGame();
}
*/


