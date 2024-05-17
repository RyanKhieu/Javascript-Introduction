console.log("Hello");
function generateQuote() {
    document.getElementById('quote').innerText = "This is a random quote";
}

function generateFact() {
    document.getElementById('fact').innerText = "This is a random fact";
}

function generateJoke() {
    document.getElementById('joke').innerText = "This is a random joke";
}

function generateImage() {
    document.getElementById('image').src = "https://via.placeholder.com/150";
}

function generateNumber() {
    document.getElementById('number').innerText = Math.floor(Math.random() * 100);
}

function generateColor() {
    document.getElementById('color').style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

function generateVideo() {
    document.getElementById('video').src = "https://www.w3schools.com/html/mov_bbb.mp4";
}

function generateAudio() {
    document.getElementById('audio').src = "https://www.w3schools.com/html/horse.mp3";
}