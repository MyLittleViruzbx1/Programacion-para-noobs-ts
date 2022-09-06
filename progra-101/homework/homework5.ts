//homework 5

export let numeros: number[] = [1,6,8,4,2,7,10,3,5];


for (let i = 1; i < numeros.length; i++) {
    let number = numeros[i]
    if(number % 2 === 0){
        console.log('El numero es par', number);
    }else{
        console.log('El numero es impar',number);
    }
    
}