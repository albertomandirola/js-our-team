//MILESTONE 0 creazione di un arrey di oggetti
let employees = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

]
let team = document.getElementById('ista')

for(let i = 0 ; i<employees.length;i++){
    console.log(employees[i])
    for(let property in employees[i]){
            let caratteristica = document.createElement('li')
            let valore = employees[i][property]
            caratteristica.innerText = valore
        
            team.append(caratteristica)
            
    }
}