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
}

module.exports = Engineer;