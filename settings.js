// There are probably a sea of ways to define an object in JS, I decided to go with this way for this object.i

const SiteCrawler = require('./site-crawler.js');

let Settings = function() {
    const startButton = $("input[name='start-button']");
    const urlInput = $("input[name='url']");
    const panel = $("#settings-pane");

    let url = "secret stuff?";

    this.startScan = function(url) {
        console.log(this.url);
        this.url = url;
        console.log(this.url);
    }

    // Set up listeners
    startButton.click(function() {
        console.log("I'm clicked");

        let crawler = new SiteCrawler('https://bordplate.no/');
        crawler.start();
    });
}

module.exports = Settings;
