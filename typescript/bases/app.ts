(() =>{
    
    const msh: string = 'Hola mundo';
    const hero = {
        name: 'Ironman',
        age: 45
    }
    
    hero.age = 50;

    function sayHello(msg: string){
        console.log(msh + ' ' + 'A');
        msg
    }

    console.log(hero.age)
})()