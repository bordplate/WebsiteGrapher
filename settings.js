// There are probably a sea of ways to define an object in JS, I decided to go with this way for this object.

let Settings = function() {
    const startButton = $("input[name='start-button']");
    const urlInput = $("input[name='url']");
    const panel = $("#settings-pane");

    let url = "";

    function startScan(url) {
        this.url = url;
    }

    // Set up listeners
    startButton.click(function() {
        console.log("I'm clicked");
    });
}
