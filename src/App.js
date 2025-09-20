const express = require("express");

const app = express();

app.use(
  ["/user", "/userId"],
  [
    (req, res, next) => {
      console.log("This is the route");
      res.send("This is the after second first");
    },
    (req, res) => {
      console.log("This is the second router");
      res.send("This is comming from the second route hadler");
    },
  ]
);

app.listen(3000, () => {
  console.log("The server set up to the port 3000");
});
