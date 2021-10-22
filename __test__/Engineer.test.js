const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
    const manager = new Engineer('Dave', 69, 'dquinn8@cogeco.ca', 'Qcent');

    expect(manager.name).toBe('Dave');
    expect(manager.employeeId).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.gitHub).toEqual(expect.any(String));
});