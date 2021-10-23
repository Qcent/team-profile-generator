const inquirer = require("inquirer");

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.members = [];
    }

    //set a Team name
    setName() {
        return inquirer.prompt([{
                type: 'input',
                name: 'teamName',
                message: "What is the Team name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            }])
            .then(data => this.name = data.teamName);
    };

    //requires a type of member to be provided // will ask all appropriote questions then add member to team
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
                    // I allow for non numeric input to allow for workplaced with exotic id numbers ie. '#3420' , '66-G'
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
        // END OF DEFAULT QUESTIONS
        // add additional questions depending on type
        switch (type.toLowerCase()) {
            case 'manager':
                newMemberQuestions.push({
                    type: 'input',
                    name: 'officeNum',
                    message: "What is this Team Manager's office number? (Required)",
                    validate: userInput => {
                        // non numeric validation to allow for exotic office numbers ie. '#202', '54b'
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
                    message: "At what School is this Intern enrolled? (Required)",
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
        // END OF EXTRA QUESTIONS

        //ask questions and create new member
        return inquirer.prompt(newMemberQuestions)
            .then(data => {
                switch (type.toLowerCase()) {
                    case 'manager':
                        this.members.push(new Manager(data.name, data.idNum, data.email, data.officeNum));
                        break;

                    case 'engineer':
                        this.members.push(new Engineer(data.name, data.idNum, data.email, data.gitHub));
                        break;

                    case 'intern':
                        this.members.push(new Intern(data.name, data.idNum, data.email, data.school));
                        break;
                }
                return true;
            });

    };
    // recursively prompts for new members until 'Finish Team' is selected 
    promptNewMember() {
        console.clear();
        console.table(this.members);
        console.log('\n');

        return inquirer.prompt([{
                type: 'list',
                name: 'newMember',
                message: "Add another Team Member?",
                choices: ['Engineer', 'Intern', 'Finish Team'],
                default: 0
            }])
            .then(type => {
                if (type.newMember === 'Finish Team') return false;

                return this.addMember(type.newMember);
            })
            .then(addMore => {
                if (!addMore) return 'finished';
                return this.promptNewMember();
            });
    };
}

module.exports = Team;