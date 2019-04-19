const express = require("express")
const app = express()
const port = 9090
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.send("Requesttest")

    app.post("198.162.10.229:3000/", (req,res) => {
        res.send("Hello")
        
    })
})

app.listen(port, () => {
    console.log(`Testreq listening on port ${port}`)
})

