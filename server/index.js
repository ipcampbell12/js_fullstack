const express = require("express");

//import models
const db = require('./models');
const app = express();
const cors = require('cors');



//be able to parse json reponse
app.use(express.json());


//whitelist your own computer use the api
app.use(cors());

//Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const userRouter = require("./routes/Users");
app.use("/users", userRouter);

const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);




//when we start API, check to see if all tables have been created
//if not table, it will create one
//other wise, it will manage through code
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
});

