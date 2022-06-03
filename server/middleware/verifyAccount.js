const db = require("../model");
const ROLES = db.ROLES;
const User = db.user;
//  FIND EMAIL DUPLICATES FOR THE REGISTER PAGE HERE

//  CHECK THROUG THE DATABASE FOR DUPLICATE ACCOUNT INFORMATION WITHIN THE MODELS. 

//  CHECK USERNAME/ EMAIL AND FOR THE ENUM ROLES. DANIEL THINK JAVA/ OBJECT ORIENTED PROGRAMMING 
checkDuplicateUsernameOrEmail = (req, res, next) => {
  
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "This is a duplicate email. You must choose a different email address to proceed. " });
      return;
    }

    next();
  });
  
};
//  CHECK THE ROLE EXISTED, IMPLEMENT THE DJANGO BACK END IF WE CAN HRE. 
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `THIS ROLE ${req.body.roles[i]} DOES NOT EXIST. `,
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
