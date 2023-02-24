const Engineer = require('../lib/engineer');

describe('Test for Engineer', () => {
  const test = new Engineer('Geo', 147, 'geo@gmail.com', 'github');
  it('should return the Github user name', () => {
    expect(test.getGithub()).toEqual('github');
  });
  it;
  it('should return the Role', () => {
    expect(test.getRole()).toEqual('Engineer');
  });
  it('should return the Name', () => {
    expect(test.getName()).toEqual('Geo');
  });
  it('should return the Id', () => {
    expect(test.getId()).toEqual(147);
  });
  it('should return the Email address', () => {
    expect(test.getEmail()).toEqual('geo@gmail.com');
  });
});
