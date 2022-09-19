// arreglos

export let people:string[] = ['Fernando', 'Wilson', 'Marcos'];

export let flowers: string[] = ['Rosa', 'Girasol', 'Lirio'];
export let colors: string[] = ['cafe', 'rojo','morado'];
export let salario:number[] = [1500, 2400, 3200];

for (let index = 0; index < people.length; index++) {
    let salarios = salario[index];
    let personas = people[index];
    let colores = colors[index];
    let elementP = people[index];
    
    console.log(`${personas} tiene un salario de ${salarios} en su casa de color ${colores}`);

}

let elementS = 0;

for (let index = 0; index < salario.length; index++) {
    elementS = salario[index];
    console.log(elementS);
}

// console.log(`${} tiene un salario de ${}`);

console.log(`${elementS}`);