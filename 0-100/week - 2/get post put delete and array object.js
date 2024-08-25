// const express = require("express");
// const port = 3000;
// const app = express();

// app.get("/", (req, res) => {
//   res.send("ADITI MERI HE");
// });

// app.listen(port);

// get post put delete in a nut shell
// GET -> Going for a consultation to get a check up.;
// post -> Going to get a new kidney;
//put -> going to get a kidney replaced;
//delete -> going to get a kidney removed;

//-----------------Status code-------------------------------//
// 200 - everything is good;
// 404 - doctor not found;
// 500 - Mid surgery light went away;
// 411 - input were incorrects;

//============================================================================================================
const express = require("express");
const port = 3000;
const app = express();

const users = [
  {
    name: "John",
    kidney: [
      {
        isHealthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnsKidney = users[0].kidney;
  const noOfKidney = johnsKidney.length;
  let noOfHealthyKidney = 0;

  for (let i = 0; i < noOfKidney; i++) {
    if (johnsKidney[i].isHealthy == true) {
      noOfHealthyKidney = noOfHealthyKidney + 1;
    }
  }
  const noOfUnhealthyKidney = noOfKidney - noOfHealthyKidney;

  res.json({
    johnsKidney,
    noOfKidney,
    noOfHealthyKidney,
    noOfUnhealthyKidney,
  });
});

app.post("/", (req, res) => {
  const userName = req.query.name;
  let isHealthyis = req.query.isHealthy;

  users.push({
    name: userName,
    kidney: [
      {
        isHealthy: isHealthyis,
      },
    ],
  });
  const noOfKidney = users.length;
  let noOfHealthyKidney = 0;

  for (let i = 0; i < noOfKidney; i++) {
    if (users[i].kidney.isHealthy == true) {
      noOfHealthyKidney = noOfHealthyKidney + 1;
    }
  }
  const noOfUnhealthyKidney = noOfKidney - noOfHealthyKidney;
  res.json({ users, noOfKidney, noOfUnhealthyKidney, noOfHealthyKidney });
});

// users.push({
//   name: "John - 2",
//   kidney: [
//     {
//       isHealthy: true,
//     },
//   ],
// });
console.log(users);

app.listen(port);
