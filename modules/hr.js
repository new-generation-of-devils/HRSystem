const Sequelize = require('sequelize');
const db = require('../config/database');


const Hr = db.define('emp' , {
    EmployeeName : { 
        type :Sequelize.STRING
    },
    EmployeeAge : { 
        type :Sequelize.INTEGER
    },
    EmployeeDep : { 
        type :Sequelize.STRING
    },
    EmployeeCity : { 
        type :Sequelize.STRING
    },
    EmployeeMobile : { 
        type :Sequelize.STRING
    },
    EmployeeEmail : { 
        type :Sequelize.STRING
    },
    EmployeeState : { 
        type :Sequelize.STRING
    },
    EmployeeRole : { 
        type :Sequelize.STRING
    },
    EmployeeImage : { 
        type :Sequelize.STRING
    },
})


module.exports = Hr ;