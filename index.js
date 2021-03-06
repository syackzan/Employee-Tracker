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

//View All Departments//
const viewAllDepartments = () => {
    //QUERY TO RETURN ALL THE DEPARTMENTS//
    const sql = 'SELECT * FROM departments';

    db.query(sql, (err, rows) => {
        console.log("\n");
        console.log("See Below for Departments");
        console.table(rows);
        init();
    });
    
}

//View All Roles//
const viewAllRoles = () => {
    //QUERY TO RETURN ALL THE ROLES//
    const sql = `SELECT role.id AS ID, role.title AS Title, departments.name AS Department, role.salary AS salary
    FROM role
    JOIN departments ON role.departments_id = departments.id`;

    db.query(sql, (err, rows) => {
        console.log("\n");
        console.log("Roles & Associated Departments");
        console.table(rows);
        init();
    });
}

//View All Employees//
const viewAllEmployees = () => {
  //QUERY TO RETURN ALL THE EMPLOYEES//
  const sql = `SELECT employee.id AS ID, 
  employee.first_name AS First_Name, 
  employee.last_name AS Last_Name,
  role.title AS Title,
  departments.name AS Department,
  role.salary AS Salary,
  CONCAT(manager.first_name, " ", manager.last_name) AS Manager
  FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN departments ON role.departments_id = departments.id
  LEFT JOIN employee manager ON manager.id = employee.manager_id`;

  db.query(sql, (err, rows) => {
    console.log("\n");
    console.log("Employee Database below");
    console.table(rows);
    init();
  });
  
}

//Add A Department//
const addADepartment = () => {
  inquirer
   .prompt([
     {
       type: "input",
       message: "Please enter the Department you would like to add?",
       name: "newDepartment"
     }
   ])
   .then((answer) => {
      //QUERY TO ADD A DEPARTMENT//
      const sql = `INSERT INTO departments (name) VALUES (?)`;
      let newDepartment = answer.newDepartment;

      db.query(sql, newDepartment, (err, rows) => {
          console.log("\n");
          console.log(`Success! ${newDepartment} Department Added`);
          console.log("\n");
          init();
      });
   });
}

//Add a Role//
const addARole = () => {
  inquirer
   .prompt([
     {
       type: "input",
       message: "Please enter the new Role?",
       name: "newRole"
     },
     {
      type: "input",
      message: "Please enter the Salaray for this role?",
      name: "newSalary"
    },
    {
      type: "input",
      message: "What department does this role fall under? Please enter Department ID:",
      name: "departments_id"
    }
   ])
   .then((answers) => {
      //QUERY TO ADD A ROLE//
      const sql = `INSERT INTO role (title, salary, departments_id) VALUES (?, ?, ?)`;
      answers.newSalary = parseInt(answers.newSalary);
      answers.departments_id = parseInt(answers.departments_id);
      let roleArray = [answers.newRole, answers.newSalary, answers.departments_id];
      
      db.query(sql, roleArray, (err, rows) => {
          console.log("\n");
          console.log(`Success! ${answers.newRole} Role Added`);
          console.log("\n");
          init();
      });
   });
}

//Add An Employee//
const addAEmployee = () => {
  inquirer
   .prompt([
     {
       type: "input",
       message: "Please enter the employee's first name:",
       name: "firstName"
     },
     {
      type: "input",
      message: "Please enter enter the employee's last name:",
      name: "lastName"
    },
    {
      type: "input",
      message: "Please Enter the employee's Role by ID#:",
      name: "eRole"
    },
    {
      type: "input",
      message: "Please Enter the employee's managers ID#:",
      name: "eManager"
    }
   ])
   .then((answers) => {
      //QUERY To Add an Employee//
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
      VALUES (?, ?, ?, ?)`;
      answers.eManager = parseInt(answers.eManager);
      answers.eRole = parseInt(answers.eRole);
      let roleArray = [answers.firstName, answers.lastName, answers.eRole, answers.eManager];
      
      db.query(sql, roleArray, (err, rows) => {
          console.log("\n");
          console.log(`Success! ${`${answers.firstName} ${answers.lastName}`} Employee Added`);
          console.log("\n");
          init();
      });
   });
}

const updateEmployee = () => {
  
  const sql = `SELECT employee.first_name AS First, employee.last_name AS Last_Name
  FROM employee`;
  let namesArray = [];

  db.query(sql, (err, rows) => {
    console.log(rows);
    for (let i = 0; i < rows.length; i++){
      let name = `${rows[i].First} ${rows[i].Last_Name}`;
      namesArray.push(name);
    }

    inquirer
   .prompt([
     {
       type: "list",
       choices: namesArray,
       message: "Please select an Employee you would like to update.",
       name: "name"
     },
     {
       type: "input",
       message: "Please enter their new role by the Role ID #: ",
       name: "promotion"
     }
   ])
   .then((answers) => {
      let setId;

      answers.promotion = parseInt(answers.promotion);
    
    //SET ID # To Search//
      for (let i = 0; i < namesArray.length; i++){
        if(answers.name == namesArray[i]){
          setId = i + 1;
        }
      }

      let prompts = [answers.promotion, setId];

      const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    
      
      db.query(sql, prompts, (err, rows) => {
          console.log("\n");
          console.log(`Success! ${answers.newRole} Employee Role Updated`);
          console.log("\n");
          init();
      });
   });
});
}

//Initializing Function when node index.js is scripted//
//Prompt to have user make a decision on what they would like to do with the department information//
const init = () => {
inquirer
  .prompt([
    {
        type: 'list',
        choices: ["view all departments", 
        'view all roles', 'view all employees', 
        'add a department',
        'add a role', 
        'add an employee', 
        'update an employee role', 
        'exit'],
        message: 'Please select an option below. You can use the Up & Down Keys to scroll',
        name: 'decision'
    }
  ])
  .then((answers) => {
    if (answers.decision == "view all departments"){
        viewAllDepartments();
    } else if (answers.decision == "view all roles"){
        viewAllRoles();
    } else if (answers.decision == "view all employees"){
        viewAllEmployees();
    }else if(answers.decision == "add a department"){
        addADepartment();
    }else if(answers.decision == "add a role"){
        addARole();
    } else if(answers.decision == "add an employee"){
       addAEmployee(); 
    } else if(answers.decision == "update an employee role"){
      updateEmployee();
    } else if (answers.decision == "exit") {
      console.log("Exiting the Program. Have a good day!")
      return process.exit();
    } else {
      console.log("Nada");
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

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`),   
    init()
);