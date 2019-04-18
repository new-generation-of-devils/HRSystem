const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');


//Database 

const db =require('./config/database');


// Test Db 

db.authenticate()
    .then (()=> console.log('Database Connected ......'))
    .catch(err => console.log('Error ' + err))

const app = express();


//Handle Bars 

app.engine('handlebars',exphbs({defaultLayout : 'main'}));
app.set('view engine','handlebars');

//set static folder 

app.use(express.static(path.join(__dirname,'public')));


// Routes 

app.use('/Task',require('./routes/route'));



app.get('/',(req , res) => res.send('Index') );

const PORT = process.env.PORT || 5000 ;




app.listen(PORT , console.log(`Srver Started On Port ${PORT}`));