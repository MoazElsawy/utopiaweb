setTimeout(function() {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 3000);


var photoContainer = document.getElementById("photo-container");





// Function to generate random number within a range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Get the container element
var starsContainer = document.getElementById("stars");

// Create 50 stars
for (var i = 0; i < 50; i++) {
  var star = document.createElement("div");
  star.classList.add("star");

  // Set random position within the box
  var x = getRandomNumber(0, 400);
  var y = getRandomNumber(0, 400);

  star.style.left = x + "px";
  star.style.top = y + "px";

  // Set random animation delay and duration
  var delay = getRandomNumber(0, 5) + "s";
  var duration = getRandomNumber(1, 5) + "s";

  star.style.animationDelay = delay;
  star.style.animationDuration = duration;

  starsContainer.appendChild(star);
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


function openModal1() {
  document.getElementById("myModal1").style.display = "block";
}

function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}



function toggleForms() {
  const signUpForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
  loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}

