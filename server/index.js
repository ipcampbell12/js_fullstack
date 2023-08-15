const express = require("express");
const db = require('./models');
//initialize an express instace
const app = express();

//when we start API, and check to see if all tables have been created
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
});

