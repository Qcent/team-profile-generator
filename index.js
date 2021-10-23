// import Team object and team building methods properties and required classes
const Team = require("./lib/TeamBuilder");
// import generateHTML utility script
const generateTeamHTML = require("./utils/generateTeamHTML");

myTeam = new Team();

// function to initialize app
const startNewTeam = () => {
    console.clear();
    console.log(`
            ==============================
            **  Team Profile Generator  **
            ==============================
`);
    return myTeam.addMember('manager');
};

// Function call to initialize app
/*
startNewTeam()
    .then(() => myTeam.promptNewMember())
    .then(() => generateTeamHTML(myTeam));

    */

generateTeamHTML({
    members: [{
            name: 'Dave',
            employeeId: '1',
            email: 'manager@work.email',
            officeNum: '44',
            type: 'Team Manager'
        },
        {
            name: 'Tim',
            employeeId: '2',
            email: 'timEngineer@work.email',
            gitHub: 'TimHub',
            type: 'Engineer'
        },
        {
            name: 'Bob',
            employeeId: '3',
            email: 'BobEngineer@work.email',
            gitHub: 'BobbyHub',
            type: 'Engineer'
        },
        {
            name: 'Eric',
            employeeId: '15',
            email: 'eric_the_intern@work.email',
            school: 'UofT',
            type: 'Intern'
        }
    ]
})