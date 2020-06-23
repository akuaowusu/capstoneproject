
var rain = new Audio("/sounds/rain.mp3");
$('#rain').on('click', function() {
    if (rain.paused) {
      rain.play();
      rain.loop=true;
      rain.volume = 0.2;
      console.log("rain play")
      }
    else {
      rain.pause();
      console.log("rain pause")
    }
 });

var wind = new Audio("/sounds/wind.mp3");
 $('#wind').on('click', function() {
  if (wind.paused) {
    wind.play();
    wind.loop=true;
    wind.volume = 0.1;
    console.log("play wind")
    }
  else {
    wind.pause();
    console.log("pause wind")
  }
});

var birds = new Audio("/sounds/birds.mp3");
$('#birds').on('click', function() {
  if (birds.paused) {
    birds.play();
    birds.loop=true;
    console.log("play birds")
    }
  else {i
    birds.pause();
    console.log("pause birds")
  }
});

var campfire = new Audio("/sounds/campfire.mp3");
$('#campfire').on('click', function() {
  if (campfire.paused) {
    campfire.play();
    campfire.loop=true;
    campfire.volume=0.1;
    console.log("play campfire")
    }
  else {
    campfire.pause();
    console.log("pause campfire")
  }
 });

var beach = new Audio("/sounds/beach.mp3");
$('#beach').on('click', function() {
  if (beach.paused) {
    beach.play();
    beach.loop=true;
    beach.volume=0.1;
    console.log("play beach")
    }
  else {
    beach.pause();
    console.log("pause beach")
  }
 });

var typing = new Audio("/sounds/typing.mp3");
$('#typing').on('click', function() {
  if (typing.paused) {
    typing.play();
    typing.loop=true;
    typing.volume=0.1;
    console.log("play typing")
    }
  else {
    typing.pause();
    console.log("pause typing")
  }
 });

var cafe = new Audio("/sounds/cafe.mp3");
$('#cafe').on('click', function() {
  if (cafe.paused) {
    cafe.play();
    cafe.loop=true;
    cafe.volume=0.2;
    console.log("play cafe")
    }
  else {
    cafe.pause();
    console.log("pause cafe")
  }
 });

var city = new Audio("/sounds/city.mp3");
$('#city').on('click', function() {
  if (city.paused) {
    city.play();
    city.loop=true;
    city.volume=0.1;
    console.log("play city")
    }
  else {
    city.pause();
    console.log("pause city")
  }
 });

var windchimes = new Audio("/sounds/windchimes.mp3");
$('#windchimes').on('click', function() {
  if (windchimes.paused) {
    windchimes.play();
    windchimes.loop=true;
    windchimes.volume=0.1;
    console.log("play windchimes")
    }
  else {
    windchimes.pause();
    console.log("pause windchimes")
  }
 });
