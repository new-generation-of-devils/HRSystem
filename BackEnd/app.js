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

// Body Parser 
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set static folder 

app.use(express.static(path.join(__dirname,'public')));


// Routes 
app.use('/Task',require('./routes/route'));

// Personal Info 
app.use('/Personal',require('./personal/personal'));


//Index route
app.get('/',(req , res) => res.render('index',{layout : 'landing'}) );

const PORT = process.env.PORT || 5000 ;




app.listen(PORT , console.log(`Srver Started On Port ${PORT}`));