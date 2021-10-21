const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const worker = new Employee('health');

    expect(worker.name).toBe('Dave');
    expect(worker.value).toEqual(expect.any(Number));
});

/*
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});
*/