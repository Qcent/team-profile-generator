const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const worker = new Employee('Dave', 69, 'dquinn8@cogeco.ca');

    expect(worker.name).toBe('Dave');
    expect(worker.employeeId).toEqual(expect.any(Number));
    expect(worker.email).toEqual(expect.any(String));

});

test('Employee has a syntactically valid email address', () => {
    const worker = new Employee('Dave', 69, 'dquinn8@cogeco.ca');

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    expect(worker.email).toEqual(expect.stringMatching(re));

});