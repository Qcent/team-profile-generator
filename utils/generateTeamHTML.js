const outputCards = team => {
    //string for holding the HTML output of function
    let output = '';
    team.members.forEach(member => {
        output += `
<div class="card">
  <header class="card-header ${member.getRole()}">
  <p class="card-header-title">
      ${member.type}
  </p>
  </header>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="${member.getSVG()}" alt="${member.getRole()} image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">${member.getName()}</p>
        <p class="subtitle is-6">id# ${member.getId()}</p>
      </div>
    </div>
  
    <div class="content">
    <div class="tabs">
    <ul >
  ${member.getLinkList()}
    </ul>
  </div>
    </div>
  </div>
</div>
`;
    });

    return output;
};

const generateTeamHTML = team => {
    //output html boilerplate and site headder
    //and foreach team member generate a card for their info
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Dev Team Profile</title>
</head>
<body>
<header class ='hero is-warning'>
<div class='hero-body'>
<p class='title'>My Team</p>
</div>
</header>
<main class="is-flex is-justify-content-center is-flex-wrap-wrap">
${outputCards(team)}
</main>
</body>
</html>

`;

}

module.exports = generateTeamHTML;