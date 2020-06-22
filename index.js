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
// 
