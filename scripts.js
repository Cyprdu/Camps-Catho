const url = 'https://spreadsheets.google.com/feeds/list/2PACX-1vSz_OJmn0w80FP1Ww3Uyi_YnQYd7Lcw5R06zM_jPXvlQNwG2zNf0CSu7xkhg5YxLt0QoX_4CeGeCBQh/1/public/values?alt=json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const entries = data.feed.entry;
        const camps = entries.map(entry => ({
            Logo: entry['gsx$photo']['$t'],
            Nom du camp ?: entry['gsx$nom']['$t'],
            description: entry['gsx$description']['$t'],
            Feuille d'inscription en pdf: entry['gsx$lieninscription']['$t'],
            lieu: entry['gsx$lieu']['$t'],
            Prix ?: parseInt(entry['gsx$prix']['$t']),
            tranche_age: entry['gsx$trancheage']['$t'],
            type: entry['gsx$type']['$t'],
            dates: entry['gsx$dates']['$t']
        }));
        displayCamps(camps);
    })
    .catch(error => console.error('Erreur:', error));

function displayCamps(campsToDisplay) {
    const container = document.getElementById('camps-container');
    container.innerHTML = '';

    campsToDisplay.forEach(camp => {
        const campCard = document.createElement('div');
        campCard.className = 'camp-card';

        campCard.innerHTML = `
            <img src="${camp.photo}" alt="${camp.nom}">
            <h3>${camp.nom}</h3>
            <p>Âge: ${camp.tranche_age}</p>
            <p>Dates: ${camp.dates}</p>
            <p>${camp.description.substring(0, 50)}... <a href="100.html">Voir plus</a></p>
        `;

        container.appendChild(campCard);
    });
}

function filterCamps() {
    const location = document.getElementById('location').value.toLowerCase();
    const age = document.getElementById('age').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('type').value;

    const filteredCamps = camps.filter(camp => {
        return (location === '' || camp.lieu.toLowerCase().includes(location)) &&
               (age === '' || camp.tranche_age.includes(age)) &&
               (price === '' || camp.prix <= price) &&
               (type === '' || camp.type === type);
    });

    displayCamps(filteredCamps);
}

// Afficher tous les camps par défaut
let camps = [];
