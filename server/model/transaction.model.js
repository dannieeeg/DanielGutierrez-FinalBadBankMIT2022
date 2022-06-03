const mongoose = require("mongoose");
//  TRANSACTION MODEL HERE DANIEL


//  THE SCHEMA SHOULD ALLOW FOR THE USER TYPE TO REFERENCED AND THE TRANSACTION TYPES, A UNIQUE ID NUMBER -- CAN USE UUID.V4

//  AMOUNT  CREATED DATE AND THE ACCOUNT NUMBER 
const Transaction = mongoose.model(
  "Transaction",
  new mongoose.Schema({
    tranType: String,
    tranNumber: Number,
    amount: Number,
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdDate: Date,
    acct: Number,
  })
);

module.exports = Transaction;
