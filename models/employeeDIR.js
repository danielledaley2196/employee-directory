const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  role: { type: String, required: true },
});

const employeeDIR = mongoose.model("employeeDIR", employeeSchema);

module.exports = employeeDIR;
