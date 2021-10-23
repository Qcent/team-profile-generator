const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name = '', id, email, school) {
        super(name, id, email);
        this.school = school;
        this.type = 'Intern';
    }

    getRole() {
        return 'Intern';
    };

    getSchool() {
        return this.school;
    };

    getLinkList() {
        return `<li><a href="mailto:${this.getEmail()}">Email: ${this.getEmail()}</a></li> <li><a>School: ${this.getSchool()}</a></li>`;
    };

    getSVG() {
        return "https://www.svgrepo.com/show/307659/barista-server-coffee-coffee-shop.svg";
    };
}

module.exports = Intern;