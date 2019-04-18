const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser());

app.get("/", (req,res) => { 
    res.send("Hello world"); 
})

app.post("/calculate", (req,res) => {
    console.log("Body of the request", req.body);
    res.send("Not doing any calculations at the moment, sorry, Please try again later");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

