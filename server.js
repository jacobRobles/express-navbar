//starter code pasted from github
// server.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
// add any necessary code you'd want to!

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect("https://github.com/jacobRobles/ClimateProject");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.redirect("https://github.com/jacobRobles/typesetting");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.redirect("https://github.com/jacobRobles/four-sorting");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});