const { verifyAccount } = require("../middleware");
const controller = require("../controller/auth.controller");



//  CORS POLICIES  FOR ACCESS CONTROL AND API CONNECTION 


//  USE THESE API ENDPOINTS FOR POSTMAN TESTING 

//  POST MAN TESTING  USE GET AND POST DANIEL. SOME ERRORS MIGHT OCCUR WITH THESE HTTP METHODS IF THE ROUTES ARENT SET UP RIGHT WITH CORS 
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/createAccount",
    [
      verifyAccount.checkDuplicateUsernameOrEmail,
      verifyAccount.checkRolesExisted,
    ],
    controller.createAccount
  );

  app.post("/api/auth/signin", controller.signin);
};
