const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const worker = new Employee('Dave', 69, 'dquinn8@cogeco.ca');

    expect(worker.name).toBe('Dave');
    expect(worker.employeeId).toEqual(expect.any(Number));
    expect(worker.email).toEqual(expect.any(String));
});

/*
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});
*/