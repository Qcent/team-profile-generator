const Team = require("./lib/TeamBuilder");
myTeam = new Team();

// Create a function to initialize app
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
startNewTeam()
    .then(() => myTeam.promptNewMember())
    .then(() => console.log(myTeam))
    /*   .then(data => generateMarkdown(data))
    .then(markdown => writeFile(markdown))
    .then(status => console.log(status))
    .catch(err => console.log(err));
*/