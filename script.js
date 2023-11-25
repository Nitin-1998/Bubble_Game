// below code will make bubbles in HTML document as per our requirement

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 105; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector("#panelBottom").innerHTML = clutter;
}

//Below code will make timer work

var timer = 60;

function setTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#panelBottom"
      ).innerHTML = `<div id="gameover"> <h1>Game Over</h1><h3>Your Score ${score}</h3>`;
    }
  }, 1000);
}

// Bwlow code will change the Hit number

var hitrn = 0;

function hitNumber() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitBox").textContent = hitrn;
}

// Below code will increase the score

score = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

// to select every element inside #panelBottom

document
  .querySelector("#panelBottom")
  .addEventListener("click", function (dets) {
    var clickedBtn = Number(dets.target.textContent);

    if (clickedBtn === hitrn) {
      increaseScore();
      hitNumber();
      makeBubble();
    } 
  });

hitNumber();
setTimer();
makeBubble();
