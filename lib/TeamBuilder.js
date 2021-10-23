class Team {
    constructor() {
        this.members = [];

        this.newMemberQuestions = [{
                type: 'input',
                name: 'name',
                message: `What is the ${this.type}'s name? (Required)`,
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

        switch (type.toLowerCase()) {
            case 'teammanager':
                this.newMemberQuestions.push({
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
                this.newMemberQuestions.push({
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
                this.newMemberQuestions.push({
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
    }
}

module.exports = Team;