// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employees = [];
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'managerName',
    message: 'PLease, enter the team manager’s name.',
    validate: answer => {
      if (answer === '') {
        return 'Please enter a name.';
      }
      return true;
    },
  },

  {
    type: 'input',
    name: 'employeeId',
    message: 'PLease, enter the employee ID.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'PLease, enter the email address.',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'PLease, enter the office number.',
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
    addEmployee();

    // const html = generateHtml(answers);
    // console.log(html);
    // // const fileName = `${answers.title.toLowerCase().split(' ').join('')}.md`;

    // return fs.writeFile(`./dist/generated.html`, html);
  })
  .catch(error => {
    console.error(error);
    // if (error.isTryError) {
    //   // Prompt couldn't be rendered in the current environment
    // }else {
    //   // Something else went wrong
    // }
  });

// TODO: Create a function to generate markdown for README
function generateHtml() {
  const employeeHtml = employees.map(employee => {
    return `<div class="card d-flex m-4" style="width: 18rem">
  <div class="card-body">
    <div class="p-3 mb-2 bg-primary text-white bg-gradient">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-white">${employee.managerName}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item border">An item</li>
      <li class="list-group-item border">A second item</li>
      <li class="list-group-item border">A third item</li>
    </ul>
    <!-- <a href="#" class="card-link">Card link</a> -->
    <!-- <a href="#" class="card-link">Another link</a> -->
  </div>
</div>`;
  });
  // console.log(data.license);
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

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'PLease, select an option.',
        choices: ['Add Engineer', 'Add Intern', 'Finish'],
      },
    ])
    .then(function (answers) {
      console.log(answers);
      switch (answers.employeeType) {
        case 'Add Engineer':
          addEngineer();
          break;
        case 'Add Intern':
          addIntern();
          break;
        case 'Finish':
        default:
          const html = generateHtml();
          fs.writeFile('index.html', html, err => {
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

function addEngineer() {}

function addIntern() {}
