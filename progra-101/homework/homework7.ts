// homework 7
export let max = (a:number, b:number, c:number)=>{
    if(a >b){

        return (a > c) ? a : c;
        // if(a>c){
        //     return a
        // }else{
        //     return c
        // }
    }
    if(b >a){
        return b;
        }
         return (a > c) ? a : c
        
}

let maxValue = max(25,15,6);
console.log(maxValue);