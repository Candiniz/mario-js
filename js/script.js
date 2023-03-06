const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const clouds2 = document.querySelector('.clouds2');
const gameboard = document.querySelector('.game-board');
const count = document.querySelector('.count');
const countdie = document.querySelector('.constdie')
const ground = document.querySelector('.ground')
const refresh = document.querySelector('.refresh')
const refreshshow = document.querySelector('.refreshshow')


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}




const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80) {

        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-die.gif';
        mario.style.width = '60px';
        mario.style.left = '50px';

        clouds2.style.animationPlayState = 'paused';
        clouds.style.animationPlayState = 'paused';
        ground.style.animationPlayState = 'paused';
        count.classList.add('countdie')
        gameboard.style.animationPlayState = 'paused';
        document.getElementById('score').innerHTML = "Your score is:"
        stoptimer()
        refresh.classList.add('refreshshow')

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump);



let timerInterval; // variable to hold the interval ID
let startTime; // variable to hold the start time
let elapsedTime = 0; // variable to hold the elapsed time

const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// function to format the time
function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const ms = date.getUTCMilliseconds().toString().padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${ms}`;
}

// function to update the timer display
function updateTimer() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  timer.textContent = formatTime(elapsedTime);
}

const letsstart = function() {
  startTime = new Date().getTime() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10); // update timer every 10 milliseconds
};

document.onload = letsstart()

const stoptimer = function() {
  clearInterval(timerInterval);
};




var refreshButton = document.querySelector('.refresh');

refreshButton.addEventListener('click', function() {
  location.reload();
});