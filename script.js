// Get JSON data
$.getJSON("sounds.json", function (data) {
    // Loop through each JSON object
    $.each(data, function (index, item) {
        // Create button
        let button = $("<button></button>");

        // Add name of audio clip to button
        button.text(item.name);

        // Add the path to the audio to the button
        button.attr("data-path", item.path);

        // Add event listener to button
        button.on("click", function () {
            playSound(this.getAttribute("data-path"));
        });

        // Append button
        $("#buttons").append(button);
    });
});

function playSound(path) {
    let audio = new Audio(path);
    audio.play();
}