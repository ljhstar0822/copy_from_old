const images = [
    "1.jpg",
    "2.jpg",
    "1.jpg",
    "2.jpg",
]

const ranImages = images[Math.floor(Math.random()*images.length)];


const backgroundImage = document.createElement("img");


backgroundImage.src = `img/${ranImages}`;

document.body.appendChild(backgroundImage);