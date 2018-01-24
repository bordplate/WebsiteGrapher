const Crawler = require('crawler');
const { URL } = require('url');

let SiteCrawler = function(website) {
    self.url = new URL(website);

    let c = new Crawler({
        maxConnections: 10,
        skipDuplicates: true, 
        callback: function(error, res, done) {
            if (error) {
                console.log(error);
            } else {
                console.log("Title: " + res.$("title").text());
                console.log("Following: " + res.options.uri);

                // Find all links to recursively go through website
                // This should be extended to find JS-clickable links (?)
                res.$('a').each(function(index, a) {
                   //console.log("URL: " + self.url.href);
                   let linkTarget = new URL(res.$(a).attr("href"), self.url.href);
                   //console.log("Found link: " + res.$(a).attr("href"));

                   if (linkTarget.hostname == self.url.hostname) {
                        c.queue(linkTarget.href);
                   } else {
                        console.log("Hostname does not match original, not following.");
                   }
                });
            }
            done();
        }
    });

    this.start = function() {
        c.queue(self.url.href);
    }
}

module.exports = SiteCrawler;  // Believe it or not, if this is not in the file, this class-thingy is not a class.
