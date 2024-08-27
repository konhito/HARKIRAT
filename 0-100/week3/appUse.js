const express = require("express");
const app = express();
const port = 3000;

// app.use(express.json());
// app.use(anyMiddleware);

//the main work of the app.use is to call the middleware in every route. ex->
function checkUser(req, res, next) {
  const { username, pass } = req.headers;
  if (username != "aditya" || pass != "pass") {
    res.status(403).json({
      msg: "Invalid user",
    });
  } else {
    next();
  }
}
app.use(checkUser);

app.get("/", (req, res) => {
  res.send("hey qt");
});

app.get("/home", (req, res) => {
  res.send("home qt hey");
});

app.listen(3000);

// above code checkUser was called only one time in app.use and check in the every routes
