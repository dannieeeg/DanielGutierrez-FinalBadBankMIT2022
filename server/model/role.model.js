const mongoose = require("mongoose");
//  ROLE SCHEMA HERE DANIEL FOR THE USER - ADMIN ROLES 



const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String,
  })
);

module.exports = Role;
