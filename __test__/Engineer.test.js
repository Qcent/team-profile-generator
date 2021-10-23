const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Dave', 69, 'dquinn8@cogeco.ca', 'Qcent');

    expect(engineer.name).toBe('Dave');
    expect(engineer.employeeId).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.type).toBe('Engineer');
});

test('Checks Engineer role', () => {
    const engineer = new Engineer('Dave', 69, 'dquinn8@cogeco.ca', 'Qcent');

    expect(engineer.getRole()).toBe('Engineer');
});