// -- how to auth in real world. --
const jwt = require("jsonwebtoken");

// -- decod,verify,generate --;

const value = {
  name: "aditiya",
  accno: 2332,
};

privateKey = "new shit";
//-- jwt --

const token1 = jwt.sign(value, "secret");
console.log(token1);

const new1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRpdGl5YSIsImFjY25vIjoyMzMyLCJpYXQiOjE3MjQ5MjY4MjB9.S1zgDsMq18mlBT6sbDOgQdxkYZCrHOlBLnoo4yPOXpU";
if (!jwt.verify(new1, "secret")) {
  console.log("invalid");
}

// -- this token has been genetated using this secret and token can only verified using this secret. --
