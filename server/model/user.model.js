const mongoose = require("mongoose");
//  USER MODEL TO HOLD THE REGISTRATION INFORMATION


// ACCOUNT NUMBER AND FULL NAME INFORMATION FOR THE ACCOUNT HOLDER

//  DATE OF BIRTH  SHOULD BE ADDED BECAUSE MOST BANKS NEED THE ACCOUNT HOLDER TO BE OLDER THAN 16 YEARS OLD. 


//  TRY TO IMPEMENT A DATE BLOCK THAT CHANGES STATE 


//  EMAIL, HASHED PASSWORD WITH BCRYPT


//  CREATED DATE FOR THE ACCOUNT HOLDER  AND ROLE FOR THE ACCOUNT HOLDER 
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    acct: Number,
    firstName: String,
    lastName: String,
    dob:  Date,
    email: String,
    password: String,
    balance: Number,
    createdDate:Date,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
