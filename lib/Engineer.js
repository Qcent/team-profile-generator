const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name = '', id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.type = 'Engineer';
    }

    getRole() {
        return 'Engineer';
    };

    getGitHub() {
        return this.gitHub;
    };

    getGitHubLink() {
        return "https://github.com/" + this.gitHub;
    };

    getLinkList() {
        return `<li><a href="mailto:${this.getEmail()}">Email: ${this.getEmail()}</a></li> <li><a href="${this.getGitHubLink()}">GitHub: ${this.getGitHub()}</a></li>`;
    };

    getSVG() {
        return "https://www.svgrepo.com/show/308016/programmer-software-engineer-coder-software-developer.svg";
    };
}

module.exports = Engineer;