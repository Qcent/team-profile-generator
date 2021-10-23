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

    getLinkList() {
        return `<li><a href="mailto:${this.getEmail()}">Email: ${this.getEmail()}</a></li> <li><a>Office #: ${this.getOfficeNumber()}</a></li>`;
    };

    getSVG() {
        return "https://www.svgrepo.com/show/92785/manager.svg";
    };
}

module.exports = Manager;