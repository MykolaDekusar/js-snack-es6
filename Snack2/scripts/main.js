'use strict';

const squadreCalcio = [
    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Toro',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Fiorentina',
        puntiFatti: 0,
        falliSubiti: 0
    }
]

squadreCalcio.forEach((element) => {
    element.puntiFatti = randomNumber();
    element.falliSubiti = randomNumber();
    // arrayModificato.push(`${element.nome} ${element.falliSubiti}`);
})
const arrayModificato = squadreCalcio.map((nome) => {
    return `${nome.nome}, falli subiti: ${nome.falliSubiti}`;
});

console.log(arrayModificato);

function randomNumber() {
    const rNumber = Math.floor(Math.random() * 21);
    return rNumber
}