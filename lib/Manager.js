const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = '', id, email, office) {
        super(name, id, email);
        this.officeNum = office;
        this.type = 'Team Manager';
    }
}

module.exports = Manager;