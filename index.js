// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//create an empty array to push the created instances in the future
const employees = [];
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: 'Please, enter manager’s name:',
    validate: answer => {
      if (answer === '') {
        return "Please enter the manager's name.";
      }
      return true;
    },
  },

  {
    type: 'input',
    name: 'employeeId',
    message: 'Please, enter his/her employee ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please, enter his/her email address:',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Please, enter his/her office number:',
  },
];
//enter the team manager’s info
inquirer
  .prompt(
    /* Pass your questions in here */
    questions,
  )
  .then(function (answers) {
    // console.log(answers);
    const manager = new Manager(
      answers.managerName,
      answers.employeeId,
      answers.email,
      answers.officeNumber,
    );

    employees.push(manager);

    //ask for an employee
    promptChoice();
  })
  .catch(error => {
    console.error(error);
    // if (error.isTryError) {
    //   // Prompt couldn't be rendered in the current environment
    // }else {
    //   // Something else went wrong
    // }
  });

function promptChoice() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'PLease, select an option:',
        choices: ['Add an Engineer', 'Add an Intern', 'Exit'],
      },
    ])
    .then(function (answers) {
      console.log(answers);
      switch (answers.choice) {
        case 'Add an Engineer':
          addEngineer();
          // promptChoice();
          break;
        case 'Add an Intern':
          addIntern();
          // promptChoice();
          break;
        case 'Exit':
        default:
          const html = generateHtml();
          fs.writeFile('./dist/index.html', html, err => {
            if (!err) {
              console.log('Success!');
            } else {
              console.log('File failed to write.', err);
            }
          });
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please, enter the name:',
        validate: answer => {
          if (answer === '') {
            return "Please enter the manager's name.";
          }
          return true;
        },
      },

      {
        type: 'input',
        name: 'employeeId',
        message: 'Please, enter his/her employee ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please, enter his/her email address:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please, enter his/her GitHub username',
      },
    ])
    .then(function (answers) {
      // console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.github,
      );

      employees.push(engineer);

      //ask for choices.
      promptChoice();
    })
    .catch(error => {
      console.error(error);
      // if (error.isTryError) {
      //   // Prompt couldn't be rendered in the current environment
      // }else {
      //   // Something else went wrong
      // }
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please, enter the name:',
        validate: answer => {
          if (answer === '') {
            return "Please enter the manager's name.";
          }
          return true;
        },
      },

      {
        type: 'input',
        name: 'employeeId',
        message: 'Please, enter his/her employee ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please, enter his/her email address:',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is his/her school please?',
      },
    ])
    .then(function (answers) {
      // console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school,
      );

      employees.push(intern);

      //ask for an employee
      promptChoice();
    })
    .catch(error => {
      console.error(error);
      // if (error.isTryError) {
      //   // Prompt couldn't be rendered in the current environment
      // }else {
      //   // Something else went wrong
      // }
    });
}

function generateHtml() {
  const employeeHtml = employees.map(employee => {
    if (employee.getRole() === 'Manager') {
      // return the manager card html
      return `<div class="card d-flex m-4" style="width: 18rem">
      <div class="card-body">
        <div class="p-3 mb-2 bg-primary text-white bg-gradient">
          <h5 class="card-title">${employee.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-white">${employee.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item border"> ID: ${employee.getId()} </a> </li>
          <li class="list-group-item border">Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()} </a> </li>
          <li class="list-group-item border">Office number: ${employee.getOfficeNumber()}</li>
        </ul>
        <!-- <a href="#" class="card-link">Card link</a> -->
        <!-- <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>`;
    } else if (employee.getRole() === 'Intern') {
      // return the intern card html
      // [{ name, id, email, school }] = employee;
      return `<div class="card d-flex m-4" style="width: 18rem">
      <div class="card-body">
        <div class="p-3 mb-2 bg-primary text-white bg-gradient">
          <h5 class="card-title">${employee.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-white">${employee.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item border"> ID: ${employee.getId()} </li>
          <li class="list-group-item border">Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()} </a> </li>
          <li class="list-group-item border">School: ${employee.getSchool()}</li>
        </ul>
        <!-- <a href="#" class="card-link">Card link</a> -->
        <!-- <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>`;
    } else if (employee.getRole() === 'Engineer') {
      // return the engineer card html
      // [{ name, id, email, github }] = employee;
      return `<div class="card d-flex m-4" style="width: 18rem">
      <div class="card-body">
        <div class="p-3 mb-2 bg-primary text-white bg-gradient">
          <h5 class="card-title">${employee.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-white">${employee.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item border"> ID: ${employee.getId()} </li>
          <li class="list-group-item border">Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()} </a> </li>
          <li class="list-group-item border">GitHub: <a href="https://github.com/${employee.getGithub()} "> ${employee.getGithub()} </a> </li>
        </ul>
        <!-- <a href="#" class="card-link">Card link</a> -->
        <!-- <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>`;
    }
  });

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>DreamTeam</title>
    </head>
    <body class="border border-dark m-3">
      <header
        class="header d-flex justify-content-center p-3 m-2 bg-danger text-white"
      >
        <h1 class="main-header p-4">My Team</h1>
      </header>

      <main class="d-flex flex-wrap justify-content-center">
        ${employeeHtml};
      </main>
      <footer></footer>
    </body>
  </html>
  `;
}
