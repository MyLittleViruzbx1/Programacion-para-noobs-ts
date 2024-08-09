"use strict";
(() => {
    const msh = 'Hola mundo';
    const hero = {
        name: 'Ironman',
        age: 45
    };
    hero.age = 50;
    function sayHello(msg) {
        console.log(msh + ' ' + 'A');
        msg;
    }
    console.log(hero.age);
})();
