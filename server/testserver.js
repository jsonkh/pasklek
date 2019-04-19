const express = require('express')
const app = express()
const port = 3000


var myLogger = (req, res, next) => {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get('/', (req, res) => {
    res.sendfile("index.html")
})

app.get('/berakningar', (req, res) => {
    res.sendfile("berakningar.html")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

