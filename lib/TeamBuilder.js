const inquirer = require("inquirer");

const TeamManager = require('./TeamManager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.members = [];
    }

    addMember(type) {
        // i add the questions here,instead of in the constructor, so i can have the type property inserted in the first question
        let newMemberQuestions = [{
                type: 'input',
                name: 'name',
                message: `What is the ${type}'s name? (Required)`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'idNum',
                message: "What is this employee's id number? (Required)",
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please enter an Employee Id Number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this employee's email address? (Required)",
                validate: email => {
                    // function validateEmail(email) // lifted from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (re.test(String(email).toLowerCase())) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address!');
                        return false;
                    }
                }
            },
        ];
        // add additional questions depending on type
        switch (type.toLowerCase()) {
            case 'teammanager':
                newMemberQuestions.push({
                    type: 'input',
                    name: 'officeNum',
                    message: "What is this Team Manager's office number? (Required)",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Please enter an Office Number!');
                            return false;
                        }
                    }
                })
                break;

            case 'engineer':
                newMemberQuestions.push({
                    type: 'input',
                    name: 'gitHub',
                    message: "What is this Engineer's GitHub user name? (Required)",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Please enter a User Name!');
                            return false;
                        }
                    }
                })
                break;

            case 'intern':
                newMemberQuestions.push({
                    type: 'input',
                    name: 'school',
                    message: "What is this School is this Intern enrolled at? (Required)",
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Please enter a School Name!');
                            return false;
                        }
                    }
                })
                break;
        }
        //ask questions and return as a promise
        return inquirer.prompt(newMemberQuestions)
            .then(data => {
                switch (type.toLowerCase()) {
                    case 'teammanager':
                        this.members.push(new TeamManager(data.name, data.idNum, data.email, data.officeNum));
                        break;

                    case 'engineer':
                        this.members.push(new Engineer(data.name, data.idNum, data.email, data.gitHub));
                        break;

                    case 'intern':
                        this.members.push(new Intern(data.name, data.idNum, data.email, data.school));
                        break;
                }
            });

    }
}

module.exports = Team;