export let heroes = ['Dom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

function heroesThatStartsWith(nameList:string[], letter:string){
    
    let newNameList:string[] = [];

    for(let i = 0; i < nameList.length; i++){
        if(nameList[i].startsWith(letter)){
             newNameList.push(nameList[i]);
        }
    }
    
    return newNameList;

}

let heroesWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(heroesWithLetterS);//She Hulk, Spiderman

// let hero = 'Spiderman';
// hero.startsWith('S');

// console.log(hero.startsWith('S'));


// let newHeroes = [];

// newHeroes.push('Hulk');




