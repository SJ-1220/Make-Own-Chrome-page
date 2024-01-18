var photo = document.getElementById("photo");
var photos = ["0.PNG", "1.PNG", "2.PNG"];
const chosenPhoto = photos[[Math.floor(Math.random() * photos.length)]];
photo.src = `img/${chosenPhoto}`;
photo.style.width = '400px';
photo.style.height = '300px';