const express = require('express');
const router = express.Router();
const db = require('../config/database');
const model = require('../modules/hr')


// get list 
router.get('/',(req,res)=>
    model.findAll()
    .then(emps=>{
        res.render('emps' ,{
            emps
        });
    })
    .catch(err => console.log('Error ' + err ))
);

//Add to list 

router.get('/add', (req,res)=> {
    const data = {
        id:'1',
        EmployeeName : 'Gnana',
        EmployeeAge : '21',
        EmployeeDep : 'CS',
        EmployeeCity : 'Tanta',
        EmployeeMobile : '01022952214',
        EmployeeEmail : 'mmmg998877@gmail.com',
        EmployeeState:'working',
        EmployeeImage : 'hhhhh',
        EmployeeRole : 'AI'

    }

    let {id,EmployeeName,EmployeeAge,EmployeeDep,EmployeeCity,EmployeeMobile,EmployeeEmail,EmployeeState,EmployeeImage,EmployeeRole} = data;
// insert into table 

    model.create ({
        id,
        EmployeeName ,
        EmployeeAge,
        EmployeeDep,
        EmployeeCity,
        EmployeeMobile,
        EmployeeEmail,
        EmployeeState,
        EmployeeImage,
        EmployeeRole
        
    })
    .then(emp=>res.redirect('/Task'))
    .catch(err => console.log(err));
})

module.exports = router;