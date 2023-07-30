const Jugador = {
hp : 100,
str : 20,
def : 8
}

const Enemigo = {
hp : 100,
str : 10,
def : 15
}



const habilidades ={
    health:3,
    boost:2,
    leech:50,
    fireBall:24,
    ironBody:8,
};
const classMates = ["alfredo", "javier", "oscar", "otniel", "santiago", "marcos"];
const teachers = ["Ángel","Marcos","Pedro","Daniel","Millard"];
const porsiAca = "";

function logicGame (){
    //logica del juego
};

function myCharacter (){
        const randomName = Math.floor(Math.random() * classMates.length);
        const nombreElegido = classMates[randomName];
        
        
        console.log(nombreElegido);

        const hpPronpt = prompt(`${nombreElegido}, HP value:`);
        const strPrompt = prompt("STTR value:");
        const defPrompt = prompt("DEF value:");

        const personaje = {
            name: nombreElegido,
            hp: hpPronpt,
            str: strPrompt,
            def: defPrompt
        }

return personaje

    };

    function enemyCharacter (){
        const randomName = Math.floor(Math.random() * teachers.length);
        const nombreElegido = teachers[randomName];
        
        
        

        const hpPronpt = prompt(`${nombreElegido}, HP value:`);
        const strPrompt = prompt("STTR value:");
        const defPrompt = prompt("DEF value:");

        const enemyPower = {
            name: nombreElegido,
            hp: hpPronpt,
            str: strPrompt,
            def: defPrompt
        }

return enemyPower

    };

    function enemyAtack (){
        
        const enemyPPower = enemyCharacter();
        
        const enemyAtack = {
            hp: enemyPPower.hp,
            str: enemyPPower.str,
            def: enemyPPower.def
        }
        
    }
    enemyAtack()