// There are probably a sea of ways to define an object in JS, I decided to go with this way for this object.i

const SiteCrawler = require('./site-crawler.js');

let Settings = function() {
    self.startButton = $("input[name='start-button']");
    self.urlInput = $("input[name='url']");
    self.panel = $("#settings-pane");

    self.url = "secret stuff?";

    this.startScan = function(url) {
        console.log(self.url);
        self.url = url;
        console.log(self.url);
    }

    // Set up listeners
    startButton.click(function() {
        console.log("I'm clicked");

        let crawler = new SiteCrawler('https://bordplate.no/');
        crawler.start();
    });
}

module.exports = Settings;
