const Employee = require('./employee');

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(name, id, this.email);
  }
  getRole() {
    return 'Engineer';
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
