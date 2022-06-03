const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");
const transController = require("../controller/transaction.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // GO THROUGHT THE USERS TO FIND THE SPECIFIC ID 

  //  SERVER CONNECTION 
  app.get("/api/user/:id", [authJwt.verifyToken], controller.getById);

  //RETRIEVE THE BALANCE FOR THE USER ID 


  app.get(
    "/api/user/balance/:id",
    [authJwt.verifyToken],
    controller.getUserBalanceById
  );
  // DO NOT DELETE 

  //  THIS IS WHERE THE CURRENT ID THATS LOGGED IN AND THE USER INFORMATION WILL BE ABLE TO UPDATE
  /**
   * @param : id - user ID
   */
  app.put(
    "/api/user/balance/:id",
    [authJwt.verifyToken],
    controller.updateUserBalanceById
  );
//  KEEP ALL THE TRANSACTIONS FOR THE ID PARAMETER HERE



//  MAKE SURE TO KEEP THE AUTHTOKENS HERE FOR THE USER NOT TO KEEP GETTING LOGGED OUT DANIEL 


  app.get(
    "/api/user/transactions/:id",
    [authJwt.verifyToken],
    transController.getUserTrans
  );

 
  app.get(
    "/api/user/all/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getAll
  );
};
