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
    id: "1a",
    username: "Siddhanth Gupta",
    content: "I love coding",
  },
  {
    id: "2b",
    username: "Vedanth Gupta",
    content: "I love playing cricket",
  },
  {
    id: "3c",
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

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  // console.log(post)
  //   res.send("request working")
  res.render("show.ejs", { post });
});

app.listen(port, () => {
  console.log(`It is listening at port ${port}`);
});
