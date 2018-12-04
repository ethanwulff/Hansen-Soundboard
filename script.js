// Sounds
var excited = new Audio("Excited.wav");

var fifteen = new Audio("15couldgetme20.wav");

var miss = new Audio("Miss_vag.wav");

var blank = new Audio("blank_the_cat.wav");

document.getElementById("excbtn").addEventListener("click", function () {
    excited.play();
});

document.getElementById("15btn").addEventListener("click", function () {
    fifteen.play();
});

document.getElementById("missbtn").addEventListener("click", function () {
    miss.play();
});

document.getElementById("blankbtn").addEventListener("click", function () {
    blank.play();
});