const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Siddhanth Gupta",
    content: "I love coding",
  },
  {
    username: "Vedanth Gupta",
    content: "I love playing cricket",
  },
  {
    username: "Ravi Gupta",
    content: "I love eating",
  },
];

app.get("/", (req, res) => {
  res.send("server working well");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
  // res.send("server working well posts");
});

app.listen(port, () => {
  console.log(`It is listening at port ${port}`);
});
