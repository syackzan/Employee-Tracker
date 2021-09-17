//Requires//
const inquirer = require('inquirer');
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cTable = require('console.table');

//Initializing express
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware for Parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Connecting to Database//

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'department_db'
},
    console.log("Connected to departments_db database")
);


const viewAllDepartments = () => {
    //GET REQUEST to DB Query - use /api/viewdepartments//
    const sql = 'SELECT * FROM departments';

    db.query(sql, (err, rows) => {
        if (err){
            res.status(500).json({ error: err.message});
            return;
        }
        console.log("\n");
        console.log("See Below for Departments");
        console.table(rows);
        init();
    });
    
}

const init = () => {
inquirer
  .prompt([
    {
        type: 'list',
        choices: ["view all departments", 'view all roles', 'view all employees', 'add a department','add a role', 'add an employee', 'update an employee role'],
        message: 'Please select an option below. You can use the Up & Down Keys to scroll',
        name: 'decision'
    }
  ])
  .then((answers) => {
    if (answers.decision == "view all departments"){
        viewAllDepartments();
    } else if (answers.decision == "view all roles"){

    } else if (answers.decision == "view all employees"){

    }else if(answers.decision == "add a department"){

    }else if(answers.decision == "add a role"){

    } else if(answers.decision == "add an employee"){
        
    } else if(answers.decision == "update an employee role"){

    } else {
        console.log("Something went wrong");
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Couldn't be rendered");
    } else {
      // Something else went wrong
      console.log("Something Else Went Wrong");
      return;
    }
  });
}

//Function for view all departments//

//Function for view all Roles//

//Function for view all Employees//

//Function for add a department//

//Function for add a role//

//Function for add an employee//

//Function for add an employee role//


app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`),   
    init()
);