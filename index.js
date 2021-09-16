var inquirer = require('inquirer');
//const ListPrompt = require('inquirer/lib/prompts/list');

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
