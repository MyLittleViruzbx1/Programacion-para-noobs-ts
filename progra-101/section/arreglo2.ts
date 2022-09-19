import { people } from './section/arrasultimet';
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

export let smartTV = {
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

let vista = [persona, car, smartTV, yuotubeVideo]
console.log(vista);


interface Personas {
    nombre: string;
    edad: number;
    isActive: boolean;
}



let willy: Personas = {
    nombre: 'Willy',
    edad:21,
    isActive: true
}


let max: Personas = {
    nombre: 'Max',
    edad:12,
    isActive: false
}

let chus: Personas = {
    nombre: 'Chusin',
    edad:45,
    isActive:true
}

let personas: Personas[] = [willy, chus, max]

for(let i = 0; i <= personas.length -1; i++){

    let persona = personas[i];
    console.log(persona.nombre + ' ' + persona.edad);

}