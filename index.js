// let rain_counter = 0
// function playRain (audio) {
//   var rain = new Audio(audio);
//     if (rain_counter % 2 === 0){
//       rain.play();
//       rain_counter += 1;
//       rain.loop=true;
//     }
//     else {
//       rain.pause();
//       rain_counter += 1;
//     }
// }

$('#rain').on('click', function() {
   //playRain();
    let rain_counter = 0
    var rain = new Audio("/sounds/birds.mp3");
    if (rain_counter % 2 === 0){
      rain.play();
      rain_counter += 1;
      rain.loop=true;
    }
    else {
      rain.pause();
      rain_counter += 1;
    }
   console.log("rain")
 });

let wind_counter = 0
function playWind () {
  var wind = new Audio("/sounds/wind.mp3");
    if (wind_counter % 2 === 0){
      wind.play();
      wind_counter += 1;
      wind.loop=true;
    }
    else {
      wind.pause();
      wind_counter += 1;
    }
 }

 $('#wind').on('click', function() {
  let wind_counter = 0
  playWind();
   console.log("wind")
 });


function playBirds (audio) {
  var birds = new Audio("/sounds/birds.mp3");
    if (birds_counter % 2 === 0){
      birds.play();
      birds_counter += 1;
      birds.loop=true;
    }
    else {
      birds.pause();
      birds_counter += 1;
    }
}

$('#birds').on('click', function() {
  let birds_counter = 0;
  playBirds();
   console.log("birds")
 });


function playCampfire () {
  var campfire = new Audio("/sounds/campfire.mp3");
    if (campfire_counter % 2 === 0){
      campfire.play();
      campfire_counter += 1;
      campfire.loop=true;
    }
    else {
      campfire.pause();
      campfire_counter += 1;
    }
 }

 $('#campfire').on('click', function() {
  let canpfire_counter = 0
  playCampfire();
   console.log("campfire")
 });

function playBeach () {
  var rain = new Audio("/sounds/beach.mp3");
    if (beach_counter % 2 === 0){
      rain.play();
      beach_counter += 1;
      rain.loop=true;
    }
    else {
      rain.pause();
      beach_counter += 1;
    }
}
 $('#beach').on('click', function() {
  let beach_counter = 0
  playBeach();
   console.log("beach")
 });

function playTyping (audio) {
  var typing = new Audio("/sounds/typing.mp3");
    if (typing_counter % 2 === 0){
      typing.play();
      typing_counter += 1;
      typing.loop=true;
    }
    else {
      typing.pause();
      typing_counter += 1;
    }
}

 $('#typing').on('click', function() {
  let typing_counter = 0
   playTyping();
   console.log("typing")
 });

let cafe_counter = 0
function playCafe (audio) {
  var cafe = new Audio("/sounds/cafe.mp3");
    if (cafe_counter % 2 === 0){
      cafe.play();
      cafe_counter += 1;
      cafe.loop=true;
    }
    else {
      cafe.pause();
      cafe_counter += 1;
    }
}

 $('#cafe').on('click', function() {
  let cafe_counter = 0
  playCafe();
   console.log("cafe")
 });

function playCity () {
  var city = new Audio("/sounds/city.mp3");
    if (city_counter % 2 === 0){
      city.play();
      city_counter += 1;
      city.loop=true;
    }
    else {
      city.pause();
      city_counter += 1;
    }
 }

 $('#city').on('click', function() {
   let city_counter =0 ;
   playCity();
   console.log("city")
 });


 function playWindchimes () {
   var windchimes = new Audio("/sounds/windchimes.mp3");
     if (windchimes_counter % 2 === 0){
       windchimes.play();
       windchimes_counter += 1;
       windchimes.loop=true;
     }
     else {
       windchimes.pause();
       windchimes_counter += 1;
     }
  }

 $('#windchimes').on('click', function() {
  let windchimes_counter = 0
   playWindchimes();
   console.log("windchimes")
 });
