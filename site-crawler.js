const Crawler = require('crawler');

let SiteCrawler = function(website) {
    const url = website;

    let c = new Crawler({
        maxConnections: 10,
        skipDuplicates: true, 
        callback: function(error, res, done) {
            if (error) {
                console.log(error);
            } else {
                console.log("Title: " + res.$("title").text());

                // Find all links to recursively go through website
                // This should be extended to find JS-clickable links (?)
                res.$('a').each(function(index, a) {
                    let linkTarget = res.$(a).attr("href");
                    console.log("Found link: " + res.$(a).attr("href")); 
                    c.queue(linkTarget);
                });
            }
            done();
        }
    });

    this.start = function() {
        c.queue(url);
    }
}

module.exports = SiteCrawler;  // Believe it or not, if this is not in the file, this class-thingy is not a class.
