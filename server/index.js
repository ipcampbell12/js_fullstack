const express = require("express");

//initialize an express instace
const app = express();


app.listen(3001, () => {
    console.log("Server is running on port 3001")
});