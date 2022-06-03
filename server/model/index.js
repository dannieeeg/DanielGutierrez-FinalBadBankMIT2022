const mongoose = require("mongoose");
mongoose.Promise = global.Promise;




//  DANIEL YOU HAVE TO REFACTOR THE MODELS ARE BETTER 
const db = {};
//  MONGOOSE DATABASE 
db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.transaction = require("./transaction.model");
//  USER ADMIN  ENUM FOR THE ROLES HERE

//  ENUMS THINK JAVA HERE DANIEL FOR FUTURE PROJECT ADDITION ADD ANOTHER DATABASE TO PUT DEPENDENT ONCE YOU ADD THE PLAID API FOR LINKED CARDS 


//  PRIMARY HOLDERS AND SECONDARY HOLDERS FOR CARD HOLDERS. 
db.ROLES = ["USER", "ADMIN"];

module.exports = db;
