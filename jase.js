// Taking Form Things and Body Parsing
const express = require('express');
const path = require ('path')
const bodyParser = require('body-parser');
const app = express();


app.use('/public',express.static(path.join(__dirname,'static','Form.html')));

app.use(bodyParser.urlencoded({extended: false}));
// parse url encoded form.
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','Form.html'))
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //DB work here
    res.send('Submitted Data Successful')
})

app.listen(3000);
