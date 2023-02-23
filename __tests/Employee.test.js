const Employee = require('../lib/employee');

const test = new Employee('Alex', 123, 'alex@Gmail.com');
describe('Test for Employee', () => {
  it('getName', () => {
    expect(test.getName()).toEqual('Alex');
  });
  it('getId', () => {
    expect(test.getId()).toEqual(123);
  });
  it('getEmail', () => {
    expect(test.getEmail()).toEqual('alex@Gmail.com');
  });
});

// describe('', () => {

// });

// describe('', () => {
//   it('', () => {
//     expect().toEqual();
//   });
// });
