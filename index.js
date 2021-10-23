// import Team object and team building methods properties and required classes
const Team = require("./lib/TeamBuilder");

/* NEED THESE HERE FOR TESTING BUT THEY SHOULD BE REMOVED ONCE THE DATA IS OUTPUT TO SPEC */
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
/*  */


// import generateHTML utility script
const generateTeamHTML = require("./utils/generateTeamHTML");
//import write file utility
const { writeFile, copyFile } = require("./utils/fileUtils");

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



writeFile(generateTeamHTML({
        members: [
            new Manager('Dave', 1, 'manager@work.email', 44),
            new Engineer('Tim', 2, 'engineer1@work.email', 'TimHub'),
            new Engineer('Bob', 3, 'engineer2@work.email', 'BobbyHub'),
            new Intern('Eric', 15, 'eric_the_intern@work.email', 'UofT')
        ]
    }))
    .then(data => {
        console.log(data);
        return copyFile();
    })
    .then(data => console.log(data))