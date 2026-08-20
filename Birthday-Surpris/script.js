function startSurprise() {

    let name = document.getElementById("name").value;

    let birthday = document.getElementById("birthday").value;

    document.getElementById("surprise").style.display = "block";

    document.getElementById("wish").innerText =
        "Happy Birthday, " + name + "! 🎉🎂 Have a wonderful day filled with happiness and beautiful memories! ❤️";
}
let photos = [
    "images/friend1.jpg",
    "images/friend2.jpg",
    "images/friend3.jpg"
];

let currentPhoto = 0;

setInterval(function () {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    document.getElementById("slideshow").src = photos[currentPhoto];

}, 3000);