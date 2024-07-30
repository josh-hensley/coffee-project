"use strict"

function renderCoffee(coffee) {
    let html = `<li class="list-inline-item mx-5 my-2"><ul class="list-inline">`;
    html += `<li class="list-inline-item"><h3>${coffee.name}</h3></li>`;
    html += `<li class="list-inline-item"><p>${coffee.roast}</p></li>`;
    html += `</ul></li>`;

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function addNewCoffee(){
    var coffee = {};
    coffee.id = coffees.length + 1;
    coffee.name = newCoffeeName.value;
    coffee.roast = newRoastSelection.value;
    coffees.push(coffee);
    coffeesList.innerHTML = renderCoffees(coffees);
}

function searchCoffees(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    const filteredCoffees = [];
    const selectedRoast = roastSelection.value;
    const searchInput = coffeeName.value;
    coffees.forEach(coffee => {
        if (coffee.name.toLowerCase().includes(searchInput.toLowerCase())){
            if (selectedRoast === coffee.roast || selectedRoast === "all"){
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeesList.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const coffeesList = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
const coffeeName = document.querySelector('#coffee-name');

const newSubmitButton = document.querySelector('#new-coffee-submit');
const newRoastSelection = document.querySelector('#new-roast-selection');
const newCoffeeName = document.querySelector('#new-coffee-name');

coffeesList.innerHTML = renderCoffees(coffees);

coffeeName.addEventListener('input', searchCoffees);
roastSelection.addEventListener('change', searchCoffees)
newSubmitButton.addEventListener('click', addNewCoffee);

