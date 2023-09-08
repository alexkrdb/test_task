const express = require('express');
const router = require('./src/router')
const app = express();
const PORT = 3000;

app.use(router)

app.listen(PORT, (error) =>{
    if(!error)
        console.log("App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);