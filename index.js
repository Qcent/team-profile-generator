// import Team object and team building methods properties and required classes
const Team = require("./lib/TeamBuilder");

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
    return myTeam.setName()
        .then(() => myTeam.addMember('manager'));
};

// Function call to initialize app
startNewTeam()
    .then(() => myTeam.promptNewMember())
    .then(() => generateTeamHTML(myTeam))
    .then(HTML => writeFile(HTML))
    .then(data => {
        console.log(data);
        return copyFile();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));