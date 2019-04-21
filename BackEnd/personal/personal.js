const express = require('express');
const router = express.Router();
const db = require('../config/database');
const model = require('../modules/hr')


// get list 
router.get('/',(req,res)=>{
    const{term} = req.query;
    console.log(term);
    model.findOne({where:{id:term}})
    .then(gigs=>res.render('personal',{
        gigs
    }))
    .catch(err=>console.log(err));
});



module.exports = router;