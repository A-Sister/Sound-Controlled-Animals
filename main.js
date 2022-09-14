

function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/o4m3IizFH/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

duck = 0;
dog = 0;
bird = 0;
cat = 0;

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);

        number_r = Math.floor(Math.random() * 255) + 1;
        number_g = Math.floor(Math.random() * 255) + 1;
        number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("heard").innerHTML = "I can Hear - "+ results[0].label;
        document.getElementById("audio_detected").innerHTML = "Detected Dog - "+dog+" Detected Cat - "+cat+" Detected Bird - "+bird+" Detected Duck - "+duck;

        document.getElementById("heard").style.color = "rgb("+ number_r+","+number_g+","+number_b+")";
        document.getElementById("audio_detected").style.color = "rgb("+ number_r+","+number_g+","+number_b+")";

        img = document.getElementById("image");

        if(results[0].label == "Barking") {
            img.src = "tenor.gif"
            dog = dog + 1;
        }
        else if(results[0].label == "Chirping") {
            img.src = "bird-animated-gif-23.gif"
            bird = bird + 1;
        }
        else if(results[0].label == "Meowing") {
            img.src = "cat-waving-gif-3.gif"
            cat = cat + 1;
        }
        else {
            img.src = "giphy.gif"
            duck = duck + 1;
            document.getElementById("heard").innerHTML = "I can Hear - Quaking";
        }
    }
}
