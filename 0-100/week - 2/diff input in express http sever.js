const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

//--------------------------------------------query ----------------------------------------
// app.get("/", function (req, res) {
//   const msg = req.query;
//   console.log(msg);
//   res.json(req.body);
// });
// output -> a json with all the query (parameter and value) ex -> { msg: 'shheeee', hii: 'bye' }
// app.get("/", function (req, res) {
//   const msg = req.query.msg; // -> we are only talking the msg parameter and its value not taking all the parameters
//   console.log(typeof msg); ///-> string
//   res.json(msg); // -> ex - > "shhee" a parameter = msg and value = "sheee"
// });
//--------------------------------------------------------------------------------------------------------

//----------------------------Body---------------------------------------------------
//for body we need a middleware -> app.use(express.json()) make all the incoming body to json formate as the body also send the formate to json format
app.get("/", function (req, res) {
  const msg = req.body; //requesting the whole body
  console.log(typeof msg); ///-> OBJEXT
  res.json(msg); // -> ex - > {"hii" : "there"}
});
//--------------------------------------------------------------------------------------------------------------------------
HEADER also


app.listen(port, () => {
  console.log(`Server started in the ${port}`);
});
