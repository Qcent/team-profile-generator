const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const worker = new Employee('Dave', 69, 'dquinn8@cogeco.ca');

    expect(worker.name).toBe('Dave');
    expect(worker.employeeId).toEqual(expect.any(Number));
    expect(worker.email).toEqual(expect.any(String));
});