// homework 4
export let numeros: number[] = [1,6,8,4,2,7,10,3,5];
let maxNum: number = -999999;

for(let i = 0; i < numeros.length; i++){
    
    if(numeros[i] >= maxNum){
        maxNum = numeros[i]
    }
}


console.log(`El numero mayor de ${numeros} es ${maxNum}`);







