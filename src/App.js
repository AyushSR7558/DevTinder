const express = require("express");
const app = express();

// Add at least one route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Start server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
