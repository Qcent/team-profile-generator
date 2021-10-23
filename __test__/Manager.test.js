const Manager = require('../lib/Manager.js');

test('creates a TeamManager object', () => {
    const manager = new Manager('Dave', 69, 'dquinn8@cogeco.ca', 7);

    expect(manager.name).toBe('Dave');
    expect(manager.employeeId).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.type).toBe('Team Manager');
});