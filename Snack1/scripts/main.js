'use strict';

const biciCorsa = [
    {
        nome: 'BMX',
        peso: '10kg'
    },
    {
        nome: 'Sport',
        peso: '10kg'
    },
    {
        nome: 'Mountain Bike',
        peso: '5kg'
    },
    {
        nome: 'Classic',
        peso: '21kg'
    },
    {
        nome: 'Electric',
        peso: '2kg'
    },
]
//initialising weight to first bike
let minWeight = parseInt(biciCorsa[0].peso);
let counter = 0;
//comparing the first weight to each object of the array
biciCorsa.forEach((element, index) => {
    const weight = (parseInt(element.peso));
    if (minWeight > weight) {
        counter = index;
        minWeight = weight;
    }

});

console.log(`The bike with the less weight is: ${biciCorsa[counter].nome}, with the weight of: ${minWeight}KG`);
alert(`The bike with the less weight is: ${biciCorsa[counter].nome}, with the weight of: ${minWeight}KG`);