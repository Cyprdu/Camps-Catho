// Exemple de données de camps (remplacer par les données réelles de la base de données)
const camps = [
    {
        photo: 'https://example.com/photo1.jpg',
        nom: 'Camp 1',
        description: 'Description du camp 1...',
        lien_inscription: 'https://example.com/inscription1',
        lieu: 'Paris',
        prix: 200,
        tranche_age: '12-15',
        type: 'sport',
        dates: '01/07/2024 - 15/07/2024'
    },
    {
        photo: 'https://example.com/photo2.jpg',
        nom: 'Camp 2',
        description: 'Description du camp 2...',
        lien_inscription: 'https://example.com/inscription2',
        lieu: 'Lyon',
        prix: 150,
        tranche_age: '10-12',
        type: 'priere',
        dates: '05/07/2024 - 20/07/2024'
    }
    // Ajouter d'autres camps si nécessaire
];

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
displayCamps(camps);
