const express = require('express');

const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.get('/', (req,res) => {
    console.log('hej')
})

app.get('/send-calculation', (req, res) => {
    let options = {
        uri: 'http://192.168.10.229:3000/calculate',
        method: 'POST',
        body: Buffer.from(JSON.stringify({
            calculate: 'doit'
        }))
    }
    request.post(options, (err, res, body) => {
        console.log('RESPONSE', body);
        res.send(`RESPONSE${body}`)
    })
})

app.listen(9090, () => {
    console.log('Server listening on port 9090');
})