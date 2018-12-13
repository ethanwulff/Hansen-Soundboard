let intervalList = [];

$("#playAll").on("click", playAll);
$("#stop").on("click", endRepeat);

// Get JSON data
$.getJSON("sounds.json", function (data) {
    // Loop through each JSON object
    $.each(data, function (index, item) {
        let div = $("<div></div>").addClass("button-div");
        let button_repeat = $("<button></button>").text("repeat");
        button_repeat.addClass("repeat");

        // Create button
        let button = $("<button></button>");

        // Add name of audio clip to button
        button.text(item.name);

        button.addClass("sound");

        // Add the path to the audio to the button
        div.attr("data-path", item.path);

        // Add event listener to button
        button.on("click", function () {
            playSound(this.parentElement.getAttribute("data-path"));
        });

        button_repeat.on("click", function () {
            repeatSound(this.parentElement.getAttribute("data-path"));
        });

        // Append button
        div.append(button);
        div.append(button_repeat);
        $("#buttons").append(div);
    });
});

function playSound(path) {
    let audio = new Audio(path);
    audio.play();
}

function repeatSound(path) {
    let audio = new Audio(path);

    audio.addEventListener('loadedmetadata', function () {
        audio.play();
        intervalList.push(setInterval(function () {
            audio.play();
        }, (audio.duration * 1000) / 2)
        );
    });
}

function playAll() {
    let soundList = document.getElementsByClassName("sound");
    for (let i in soundList) {
        playSound(soundList[i].parentElement.getAttribute("data-path"));
    }
}

function endRepeat() {
    for (let i in intervalList)
        clearInterval(intervalList[i]);
}