const {request} = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})

const appRouting    = require('./routers/app-route');

app.use(express.static('assets'));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/assets',express.static(path.join(__dirname, 'assets')));

app.use('/', appRouting);