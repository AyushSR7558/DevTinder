const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    res.send({
        firstName: "Ayush",
        lastName: "Raut"
    })
})

app.post("/user", (req, res) => {
    res.send("You have succesfully updated the DB");
})

app.delete("/user", (req, res) => {
    res.send("You are deleting the resources!")
})

app.use("/", (req, res) => {
    console.log("This works!");
    res.send("Hello from Express!"); // respond to the client
});

app.listen(7777);
