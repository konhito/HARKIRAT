// Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. // Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next. // Middleware functions can perform the following tasks: // Execute any code. // Make changes to the request and the response objects.

// End the request-response cycle. // Call the next middleware function in the stack. // If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
// An Express application can use the following types of middleware:
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  const kidneyId = req.query.ID;
  const username = req.headers.username;
  const pass = req.headers.pass;
  console.log(username); // this is authentication
  if (username != "aditya" && pass != "pass") {
    res.status(403).json({ msg: "User does not exist" });
    return;
  } //-- this is input validation
  if (kidneyId != 1 && kidneyId != 2) {
    res.send(411).json({ msg: "wrong inputs" });
    return;
  }
});
app.listen(port, () => {
  console.log(`server running in port 3000`);
});
