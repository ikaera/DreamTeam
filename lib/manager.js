const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    supper(name, id, email);
  }

  getRole() {
    return 'Manager';
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
