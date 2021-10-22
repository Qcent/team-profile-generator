const Intern = require('../lib/Intern.js');

test('creates a Intern object', () => {
    const intern = new Intern('Dave', 69, 'dquinn8@cogeco.ca', 7);

    expect(intern.name).toBe('Dave');
    expect(intern.employeeId).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});