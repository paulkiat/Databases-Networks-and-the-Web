// The index.js file of your application
const express = require("express");
const app = express();
const port = 8083;



app.get("/", (req, res) => res.send("<h1>This is Our Home Page</h1>"));
app.get("/about", (req, res) => res.send("<h1>This is Our about page</h1>"));
app.get("/search", (req, res) => res.send("<h1>This is Our Search Page</h1>"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));