import { base, limite } from '../section/loopshomework';

export function printMultiplicationTable(base:number,limite:number = 10){
    if(limite <= 0){
        throw new Error ('El limite debe ser mayor de 0')
    }
    for(let i = 1; i <= limite; i++){
        console.log(base, " x ", i, ' = ', base*i);
    }
}