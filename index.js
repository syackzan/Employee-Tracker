//Requires//
const inquirer = require('inquirer');
//Initializing express
const express = require('express');
const path = require('path');
const db = require('db');

//Initializing express
const app = express();
const PORT = 3001;

//Middleware for Parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));


const viewAllDepartments = () => {
    //GET REQUEST to DB Query - use /api/viewdepartments//
    app.get('/api/viewdepartments', (req, res) =>
    console.log(res.json())
    //db.query();
    )
    
}

const init = () =>{
    inquirer
  .prompt([
    {
        type: 'list',
        choices: ["view all departments", 'view all roles', 'view all employees', 'add a department','add a role', 'add an employee', 'update an employee role'],
        message: 'Please select an option below. You can use the Up & Down Keys to scroll',
        input: 'decision'
    }
  ])
  .then((answers) => {
    if (answers == "view all departments"){
        viewAllDepartments();
    } else if (answers == "view all roles"){

    } else if (answers == "view all employees"){

    }else if(answers == "add a department"){

    }else if(answers == "add a role"){

    } else if(answers == "add an employee"){
        
    } else if(answers == "update an employee role"){

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

init();
