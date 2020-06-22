function playRain () {
  var rain = new Audio("rain.mp3");
  rain.play();
  rain.loop = true;
}

$('#rain').on('click', function() {
  playRain();
  console.log("rain")
});

function playWind () {
  var wind = new Audio("wind.mp3");
  wind.play();
  wind.loop=true;
}

$('#wind').on('click', function() {
  playWind();
  console.log("wind")
});

function playBirds () {
  var birds = new Audio("birds.mp3");
  birds.play();
  bird.loop=true;
}

$('#birds').on('click', function() {
  playBirds();
  console.log("birds")
  birds.lopp=true;
});

function playCampfire () {
  var campfire = new Audio("campfire.mp3");
  campfire.play();
  campfire.loop=true;
}

$('#campfire').on('click', function() {
  playCampfire();
  console.log("campfire")
});
