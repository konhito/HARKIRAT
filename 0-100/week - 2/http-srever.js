const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  console.log(req.body);
  res.send("It worked");
});

app.listen(port, () => {
  console.log(`Server started in the ${port}`);
});


//simple http sever that prints whatever send to body 
