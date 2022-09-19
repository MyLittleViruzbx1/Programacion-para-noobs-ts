// objetos literales

export let persona = {
    name: 'willy',
    age: 21,
    hobbies: ['games', 'basquet ball', 'programming'],
    toString(){
        let sheik = this.name + ' ' + this.age;
        console.log(sheik);
    }
}

export let car = {
    llantas: 4,
    ventanas: 5,
    marca: 'Hilux',
    motor: 'canilos',
    color:"verde"
}

let smartTV = {
    color: "negro",
    pulgadas: 32,
    html: true,
    marca: 'LG',
    patas:'sin patas'
}


let yuotubeVideo = {
    canal: 'progra101',
    creador: 'noyer',
    age: 23,
    lugar: 'quiche',
    videos: 13,
    canales: ['marvares177', 'malvarez777']
}

console.log(persona.hobbies[1]);
console.log(persona.toString);