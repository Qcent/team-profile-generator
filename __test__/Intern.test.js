const Intern = require('../lib/Intern.js');

test('creates a Intern object', () => {
    const intern = new Intern('Dave', 69, 'dquinn8@cogeco.ca', 'University of Toronto');

    expect(intern.name).toBe('Dave');
    expect(intern.employeeId).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.type).toBe('Intern');
});

test('Checks Intern role', () => {
    const intern = new Intern('Dave', 69, 'dquinn8@cogeco.ca', 'University of Toronto');

    expect(intern.getRole()).toBe('Intern');
});