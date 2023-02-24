const Manager = require('../lib/manager');

describe('Test for Manager', () => {
  const test = new Manager('Many', 258, 'manager@gmail.com', 1);
  it('should return the tOfficeNumber', () => {
    expect(test.getOfficeNumber()).toEqual(1);
  });
  it('should return the Role', () => {
    expect(test.getRole()).toEqual('Manager');
  });
  it('should return the Name', () => {
    expect(test.getName()).toEqual('Many');
  });
  it('should return the Id', () => {
    expect(test.getId()).toEqual(258);
  });
  it('should return the Email', () => {
    expect(test.getEmail()).toEqual('manager@gmail.com');
  });
});
