const Team = require("./lib/TeamBuilder");
myTeam = new Team();

// Create a function to initialize app
const startNewTeam = () => {

    return myTeam.addMember('TeamManager');
};

// Function call to initialize app
startNewTeam()
    .then(data => console.log(myTeam))
    /*   .then(data => generateMarkdown(data))
    .then(markdown => writeFile(markdown))
    .then(status => console.log(status))
    .catch(err => console.log(err));
*/