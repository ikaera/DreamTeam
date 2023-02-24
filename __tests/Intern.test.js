const Intern = require('../lib/intern');

describe('Test for Intern', () => {
  const test = new Intern('Intern', 369, 'intern@gmail.com', 'US Berekely');
  it('should return the School', () => {
    expect(test.getSchool()).toEqual('US Berekely');
  });
  it('should return the Role', () => {
    expect(test.getRole()).toEqual('Intern');
  });
  it('should return the Name', () => {
    expect(test.getName()).toEqual('Intern');
  });
  it('should return the Id', () => {
    expect(test.getId()).toEqual(369);
  });
  it('should return the Email', () => {
    expect(test.getEmail()).toEqual('intern@gmail.com');
  });
});
