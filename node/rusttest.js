const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');
app.get('/send-calculation', (req, res) => {
    let options = {
        uri: 'http://192.168.10.229:3000/calculate',
        method: 'POST',
        body: "Det här är requestbody"
    }

    request.post(options, (err, res, body) => {
        console.log('RESPONSE', body);
        res.send(`RESPONSE${body}`);
    })
})

app.use('/', express.static('dist'))

// app.use('*', (req, res) => {
//     console.log(__dirname)
//     res.sendFile(path.join(__dirname ,'../dist/index.html'));
// })
app.listen(9090, () => {
    console.log('Server listening on port 9090');
})