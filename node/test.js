const express = require('express');

const app = express();


app.get('/', (req,res) => {
    console.log('hej')
})

app.get('/send-calculation', (req, res) => {
    
})