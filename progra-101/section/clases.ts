export class Car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;
    createdAt: number;

    constructor(){
        this.brand = 'NO brand';
        this.doors = 0;
        this.fuelTank = 100;
        this.isRunning = false;
        this.type = 'NO type';
        this.createdAt = 123;
    }
    turnOn(){
        if(this.isRunning){
            console.log('El carro ya estaba encendido wey');
            return;
        }else{
            this.isRunning = true;
            console.log('El carro estara encendido');
        }
    }
}

let myHilux = new Car();

console.log(myHilux);

myHilux.turnOn()

// setTimeout(function(){
//     console.log('Hola mundo');
// });

const getUsuarioByID = (id) =>{
    const usuario = {
        id,
        nombre: 'Goten'
    }
    setTimeout(()=>{
        console.log(usuario);
    },1300);
}

getUsuarioByID(10);