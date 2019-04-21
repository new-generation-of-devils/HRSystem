const express = require('express');
const router = express.Router();
const db = require('../config/database');
const model = require('../modules/hr');
const task = require('../modules/hr1')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


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



//Search for Emp 
router.get('/search',(req,res) => {
    const {term} =req.query;
    model.findAll({where: {id:term}})
    .then(emps => res.render('emps',{emps}))
    .catch(err=>console.log(err));
});


//Add to list 

router.post('/add', (req,res)=> {

    let {id,EmployeeName,EmployeeAge,EmployeeDep,EmployeeCity,EmployeeMobile,EmployeeEmail,EmployeeState,EmployeeImage,EmployeeRole} = req.body;
    let errors =[];

   /* if(!id){
        errors.push({text : 'please Enter Id'});
    }
    if(!EmployeeName){
        errors.push({text : 'please Enter name'});
    }
    if(!EmployeeAge){
        errors.push({text : 'please Enter age'});
    }
    if(!EmployeeCity){
        errors.push({text : 'please Enter city'});
    }
    if(!EmployeeMobile){
        errors.push({text : 'please Enter mobile'});
    }
    if(!EmployeeEmail){
        errors.push({text : 'please Enter email'});
    }
    if(!EmployeeRole){
        errors.push({text : 'please Enter role'});
    }
    if(!EmployeeState){
        errors.push({text : 'please Enter state'});
    }

*/
    //check errors 

    if(errors.length >0){

        res.render('emps', {
            errors,
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
        });

    }else {
        
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
    } 
    
});
//Add Task
router.post('/addTask',(req, res) =>{
    /*const data = {
        id_emp: 1,
        TaskName: "Create",
        TaskSupv: "Khater",
        TaskStart: "23/10/2018",
        TaskDead: "22/10/2018",
        Description: "Going"
    };*/
        let {id_emp, TaskName, TaskSupv, TaskStart, TaskDead, Description} = req.body;
        task.create({
            id_emp,
            TaskName,
            TaskSupv, 
            TaskStart, 
            TaskDead, 
            Description
        })
        .then(task => res.redirect('/Task'))
        .catch(err => console.log(err));
});

// Delete

router.get('/delete',function(req,res){
    const {term2} = req.query;
    console.log(term2);
    let query ={__id:term2};
    console.log(query);
    model.destroy({where:{id:term2}})
    .then(emp=>res.redirect('/Task'))
    .catch(err => console.log(err));
});

//update 

router.get('/check',function(req,res){
    const {term3} = req.query;
    console.log(term3);
    model.findOne({where:{id:term3}})
    .then(gigs=>{gigs})
    .catch(err=>console.log(err));
    up(term3);
});
function up(term){
router.post('/update',(req,res)=>{
    let {id,EmployeeName,EmployeeAge,EmployeeDep,EmployeeCity,EmployeeMobile,EmployeeEmail,EmployeeState,EmployeeImage,EmployeeRole} = req.body;
    let errors =[];
    console.log(EmployeeName);
   /*model.update ({
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
    },{
        where:{id:term}
    })
    .then(emp=>res.redirect('/Task'))
    .catch(err => console.log(err));
});*/
model.destroy({where:{id:term}})
    .then(()=>console.log(Done))
    .catch(err => console.log(err));
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
});}




module.exports = router;