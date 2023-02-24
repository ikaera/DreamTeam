const Employee = require('../lib/employee');

const test = new Employee('Alex', 123, 'alex@Gmail.com');
describe('Test for Employee', () => {
  it('should return the Name', () => {
    expect(test.getName()).toEqual('Alex');
  });
  it('should return the Id', () => {
    expect(test.getId()).toEqual(123);
  });
  it('should return the Email', () => {
    expect(test.getEmail()).toEqual('alex@Gmail.com');
  });
  it('should return the Role', () => {
    expect(test.getRole()).toEqual('Employee');
  });
});
