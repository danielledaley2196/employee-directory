const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.env.MONGODB_URI || "mongodb://localhost/reactcms");

const employeeSeed = [
  {
    name: "Harry Potter",
    email: "hpotter@hogwarts.edu",
    number: "603-589-6522",
    role: "student",
  },
  {
    name: "Hermione Granger",
    email: "hgranger@hogwarts.edu",
    number: "603-287-9821",
    role: "student",
  },
  {
    name: "Ronald Weasley",
    email: "rweasley@hogwarts.edu",
    number: "603-859-7459",
    role: "student",
  },
  {
    name: "Draco Malfoy",
    email: "dmalfoy@hogwarts.edu",
    number: "603-298-6458",
    role: "student",
  },
  {
    name: "Dean Thomas",
    email: "dthomas@hogwarts.edu",
    number: "603-789-4712",
    role: "student",
  },
  {
    name: "Seamus Finnigan",
    email: "sfinnigan@hogwarts.edu",
    number: "603-867-5309",
    role: "student",
  },
  {
    name: "Minerva McGonagall",
    email: "mmcgonagall@hogwarts.edu",
    number: "603-889-7800",
    role: "staff",
  },
  {
    name: "Severus Snape",
    email: "ssnape@hogwarts.edu",
    number: "603-889-4572",
    role: "staff",
  },
  {
    name: "Vincent Crabbe",
    email: "vcrabbe@hogwarts.edu",
    number: "603-241-5441",
    role: "student",
  },
  {
    name: "Albus Dumbledore",
    email: "adumbledore@hogwarts.edu",
    number: "603-889-2210",
    role: "staff",
  },
];
db.EmployeeDIR.remove({})
  .then(() => db.EmployeeDIR.collection.insertMany(employeeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
