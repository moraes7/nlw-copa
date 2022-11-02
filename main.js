function createMatches(team1, hour, team2) {
    return `
        <li>
            <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}">
        </li>
    `
}

function createCard(date, day, matches) {
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${matches}
        </ul>
    </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW Copa">
    </header>

    <main id="cards">
        ${createCard("24/11", "QUINTA", 
        createMatches("brazil", "16:00", "serbia"))}
        ${createCard("28/11", "SEGUNDA", 
        createMatches("brazil", "16:00", "switzerland"))}
        ${createCard("02/12", "SEXTA", 
        createMatches("brazil", "13:00", "cameroon"))}
    </main>
`