// Creo un Array di oggetti contenente i membri del team
const team = [
    { name: 'Wayne Barnett', job: 'Founder & CEO', pic: 'wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela Caroll', job: 'Chief Editor', pic: 'angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', job: 'Office Manager', pic: 'walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', job: 'Social Media Manager', pic: 'angela-lopez-social-media-manager.jpg' },
    { name: 'Scott Estrada', job: 'Developer', pic: 'scott-estrada-developer.jpg' },
    { name: 'Barbara Ramos', job: 'Graphic Designer', pic: 'barbara-ramos-graphic-designer.jpg' },
]

for (let member of team) {
    console.log(member['name'], member['job'], member['pic']);
}
