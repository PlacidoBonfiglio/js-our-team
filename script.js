const membersListElement = document.getElementById('members-list');

// Creo un Array di oggetti contenente i membri del team
const team = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', pic: 'wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela Caroll', role: 'Chief Editor', pic: 'angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', role: 'Office Manager', pic: 'walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', role: 'Social Media Manager', pic: 'angela-lopez-social-media-manager.jpg' },
    { name: 'Scott Estrada', role: 'Developer', pic: 'scott-estrada-developer.jpg' },
    { name: 'Barbara Ramos', role: 'Graphic Designer', pic: 'barbara-ramos-graphic-designer.jpg' }
]

let items = '';

// Ciclo for OF poiché siamo all'interno di un Arrole
for (let member of team) {
    console.log(member['name'], member['role'], member['pic']);



    items += `${member['name']}, ${member['role']}, <img src="img/${member['pic']}">`;
}

membersListElement.innerHTML = items;