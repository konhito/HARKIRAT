// Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. // Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next. // Middleware functions can perform the following tasks: // Execute any code. // Make changes to the request and the response objects.

// End the request-response cycle. // Call the next middleware function in the stack. // If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
// An Express application can use the following types of middleware:

// const express = require("express");
// const app = express();
// const port = 3000;
// app.use(express.json());

// app.get("/", (req, res) => {
//   const kidneyId = req.query.ID;
//   const username = req.headers.username;
//   const pass = req.headers.pass;
//   console.log(username); // this is authentication
//   if (username != "aditya" && pass != "pass") {
//     res.status(403).json({ msg: "User does not exist" });
//     return;
//   } //-- this is input validation
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.send(411).json({ msg: "wrong inputs" });
//     return;
//   }
// });
// app.listen(port, () => {
//   console.log(`server running in port 3000`);
// });

// - insted of repeating code we can do this make a function and check for all the validations.

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json()); // To parse JSON request bodies

// function userNameChecker(username, pass) {
//   return username === "aditya" && pass === "pass";
// }

// app.get("/", (req, res) => {
//   const { username, pass } = req.headers;

//   if (!username || !pass) {
//     res.status(400).json({ msg: "Username and password are required" });
//     return;
//   }

//   if (!userNameChecker(username, pass)) {
//     res.status(403).json({ msg: "Invalid user" });
//     return;
//   }

//   res.status(200).json({ msg: "Welcome, authenticated user!" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//-----------------------------better code down-------------------------------------------
const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  const { username, pass } = req.headers;
  if (username !== "aditya" || pass !== "pass") {
    res.status(403).json({
      msg: "Invalid user",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyID = parseInt(req.query.ID, 10);
  if (kidneyID !== 1 && kidneyID !== 2) {
    res.status(400).json({
      msg: "Invalid input",
    });
  } else {
    next();
  }
}

app.get("/", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney is fine");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//output -> your kidnet is fine with query = 1 , headers = aditya , pass
