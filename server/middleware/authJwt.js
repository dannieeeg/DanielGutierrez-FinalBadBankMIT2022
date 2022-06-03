const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../model");
const User = db.user;
const Role = db.role;
//  verify the jwt for the new product build  if the tokens dont work or arent provided. 



//  daniel make sure to set a time out for the tokens so that they wont be able to stay logged in.
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: " STOP! THERE WAS NO TOKEN PROVIDED " });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: " THIS IS AN UNAUTHORIZED ACCESS" });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
//  FIND THE ROLE WITHIN THE DATABASE 
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "ADMIN") {
            next();
            return;
          }
        }
//  THINK DJANGO ADMIN ROLE 
        res.status(403).send({ message: "TO PROCEED THIS MUST BE AN ADMIN!" });
        return;
      }
    );
  });
};



//   DANIEL  MUST EXPORT IF EVERYTHING IS AUTHENTICATED, TOKEN, AND ADMIN  OR USER ROLE. 
const authJwt = {
  verifyToken,
  isAdmin,
};
module.exports = authJwt;
