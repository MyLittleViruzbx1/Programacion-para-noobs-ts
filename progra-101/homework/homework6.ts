//homework 6

export let tablas:number[] = [1,2,3,4,5]
    for(let i = 1; i <= tablas.length; i++){
        // console.log(`${i} ${i+i} ${i+i+i} ${i+i+i+i} ${i+i+i+i+i}`)
        let line = '';
        for(let j = 1; j<=5; j++){
            line += ' ' + (i*j);
        }
        console.log(line);
    }
