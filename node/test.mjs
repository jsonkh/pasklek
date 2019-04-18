const express = requir('express');
const yarn
const rustLek = require('../rust/pkg/rustlek')
const app = express();
import rustLek from 'rustLek';


app.get('/', (req,res) => {
    console.log('hej');
    rustLek.greet();
})

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

app.listen(9090, () => {
    console.log('Server listening on port 9090');
})