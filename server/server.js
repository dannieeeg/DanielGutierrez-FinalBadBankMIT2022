const express = require("express");
const cors = require("cors");
const dbConfig = require("../server/config/db.config");

const app = express();
//  ORIGIN OF THE LOCAL HOST


//  CORSOPTIONS MAKE NOTE OF IT FOR THE LOCAL MACHINE MAKE SURE TO CREATE IT PROPERLY
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

//  FOLLOW UDEMY COURSE 


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const db = require("../server/model");
const Role = db.role;
  // ${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB} replace with your cluster or keep the same for local host capabilities

  // watch the placement 
  //  mongodb documentation 
db.mongoose
  .connect(`mongodb+srv://dannieeeg:Mit123Coding@mycapstoneproject.qjzqp.mongodb.net/?retryWrites=true&w=majority
  
  `, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "WELCOME TO BANK SAFELY WITH DANIEL GUTIERREZ." });
});

require("../server/routes/auth.routes")(app);
require("../server/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "USER",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
//  ADMIN ROLE  OR USR ROLE 
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "ADMIN",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
