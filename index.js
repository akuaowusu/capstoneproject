function playRain () {
  var rain = new Audio("rain.mp3").loop;
  rain.play();
}

$('#rain').on('click', function() {
  playRain();
  console.log("rain")
});

function playWind () {
  var wind = new Audio("wind.mp3").loop;
  wind.play();
}

$('#wind').on('click', function() {
  playWind();
  console.log("wind")
});

function playBirds () {
  var birds = new Audio("birds.mp3").loop;
  birds.play();
}

$('#birds').on('click', function() {
  playBirds();
  console.log("birds")
});

function playCampfire () {
  var campfire = new Audio("campfire.mp3").loop;
  campfire.play();
}

$('#campfire').on('click', function() {
  playCampfire();
  console.log("campfire")
});
