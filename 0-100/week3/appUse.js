// const express = require("express");
// const app = express();
// const port = 3000;

// // app.use(express.json());
// // app.use(anyMiddleware);

// //the main work of the app.use is to call the middleware in every route. ex->
// function checkUser(req, res, next) {
//   const { username, pass } = req.headers;
//   if (username != "aditya" || pass != "pass") {
//     res.status(403).json({
//       msg: "Invalid user",
//     });
//   } else {
//     next();
//   }
// }
// app.use(checkUser);

// app.get("/", (req, res) => {
//   res.send("hey qt");
// });

// app.get("/home", (req, res) => {
//   res.send("home qt hey");
// });

// app.listen(3000);

// above code checkUser was called only one time in app.use and check in the every routes
// // express.json([options])
// This middleware is available in Express v4.16.0 onwards.

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

//---------------------------------------assigments--------------------------
//count the number of request

const express = require("express");
const app = express();
const port = 3000;

let cnt = 0;
function Countreq(req, res, next) {
  cnt++;
  next();
}

app.use(Countreq);

app.get("/", (req, res) => {
  //cnt++
  res.send(`${cnt}`);
});

//Global catches  -> its like a error detection when we messed up the logic and left a test case untoched.
app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry something is up with your server",
  });
});

app.listen(3000);
