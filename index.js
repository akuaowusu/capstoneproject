// function playRain () {
//   var rain = new Audio("rain.mp3");
//   rain.play();
//   rain.loop = true;
// }

// $('#rain').on('click', function() {
//   playRain();
//   console.log("rain")
// });

// function playWind () {
//   var wind = new Audio("wind.mp3");
//   wind.play();
//   wind.loop=true;
// }

// $('#wind').on('click', function() {
//   playWind();
//   console.log("wind")
// });

// function playBirds () {
//   var birds = new Audio("birds.mp3");
//   birds.play();
//   bird.loop=true;
// }

// $('#birds').on('click', function() {
//   playBirds();
//   console.log("birds")
//   birds.lopp=true;
// });

// function playCampfire () {
//   var campfire = new Audio("campfire.mp3");
//   campfire.play();
//   campfire.loop=true;
// }

// $('#campfire').on('click', function() {
//   playCampfire();
//   console.log("campfire")
// });

// function playBeach () {
//   var beach = new Audio("beach.mp3");
//   beach.play();
//   campfire.loop=true;
// }

// $('#beach').on('click', function() {
//   playBeach();
//   console.log("beach")
// });

var counter = 0
function playAudio(audio){
    var audio1 = document.getElementById(audio);
    if (counter % 2 === 0){
        audio1.play();
        counter += 1;
    }
    else {
        audio1.pause();
        counter += 1;
    }
}


// function playTyping () {
//   var typing = new Audio("typing.mp3");
//   typing.play();
//   typing.loop=true;
// }

// $('#typing').on('click', function() {
//   playTyping();
//   console.log("typing")
// });

// function playCafe () {
//   var cafe = new Audio("cafe.mp3");
//   cafe.play();
//   cafe.loop=true;
// }

// $('#cafe').on('click', function() {
//   playCafe();
//   console.log("cafe")
// });

// function playCity () {
//   var city = new Audio("city.mp3");
//   city.play();
//   city.loop=true;
// }

// $('#city').on('click', function() {
//   playCity();
//   console.log("city")
// });

// function playWindchimes () {
//   var windchimes = new Audio("windchimes.mp3");
//   windchimes.play();
//   windchimes.loop=true;
// }

// $('#windchimes').on('click', function() {
//   playWindchimes();
//   console.log("windchimes")
// });
