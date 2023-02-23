const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;
    super(name, id, email);
  }
  getRole() {
    return 'Engineer';
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
