// user can bombared the input fields we can handle those req, as our server are out open so we need some like of validation for he inputs
const express = require("express");
const app = express();
const z = require("zod");
const port = 3000;

const inputValid = z.literal("1").or(z.literal("2"));
app.use(express.json());

function UserkidneyID(req, res, next) {
  const kidneyId = req.body.kidneyId;
  const validation = inputValid.safeParse(kidneyId);
  if (!validation.success) {
    res.status(403).json({
      msg: "INVALID INPUT",
    });
  } else {
    next();
  }
}

app.get("/", UserkidneyID, (req, res) => {
  res.send("hey qt");
});

//GLOBAL catches
app.use(function (err, req, res, next) {
  console.log(err);
  res.json({
    msg: "Sorry something is up with your server",
  });
});

app.listen(3000);
