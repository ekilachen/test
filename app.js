const express = require('express')
const app = express()

function hello(req, res) { 
    res.send('Hello World!') 
}

var hello2 = function(req, res) { 
    res.send('Hello World2!'); 
};

app.get('/', hello )
app.get('/hello', hello2 )

app.listen(3000, function() { 
    console.log('Example app listening on port 3000!')
})