//Homework 8
//arreglo de objetos

export function largesNameArray(nameArray:string[]){

    let largesName = ''

    for (let i = 0; i < nameArray.length; i++) {

        let name = nameArray[i]

            if(name.length > largesName.length){
                largesName = name;
            }
    }

    return largesName;

}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier ixcoy'];
let hero = largesNameArray(heroes);
console.log(hero);