// The main.js file of your application
module.exports = function(app) {
    app.get("/", function( req, res ) {
        res.render("index.html");
    });

    app.get("/search", function( req, res ) {
        res.render("search.html");
    });

    app.get("/about", function ( req, res ) {
        res.render("about.html");
    })
}