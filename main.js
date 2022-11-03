function createMatches(team1, hour, team2) {
    return `
        <li>
            <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}">
        </li>
    `
}

let delay = -0.4;
function createCard(date, day, matches) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${matches}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
        createCard("24/11", "QUINTA", createMatches("uruguay", "10:00", "south-korea") + createMatches("portugal", "13:00", "ghana") + createMatches("brazil", "16:00", "serbia")) +
        createCard("28/11", "SEGUNDA", createMatches("south-korea", "10:00", "ghana") +
        createMatches("brazil", "13:00", "switzerland") + createMatches("portugal", "16:00", "uruguay"))