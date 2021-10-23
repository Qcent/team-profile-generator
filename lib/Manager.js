const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = '', id, email, office) {
        super(name, id, email);
        this.officeNum = office;
        this.type = 'Team Manager';
    }

    getRole() {
        return 'Manager';
    };

    getOfficeNumber() {
        return this.officeNum;
    };
}

module.exports = Manager;