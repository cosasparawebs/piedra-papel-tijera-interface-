function computadora(){
    let opciones = ["piedra", "papel", "tijera"];
    opcionComputadora = opciones[Math.floor(Math.random()*opciones.length)];
    return opcionComputadora;
}

let puntosJugador =  0;
let puntosComputadora = 0;
let empate = 0;

function partida(botones, turnoComputadora) {

    if(botones === turnoComputadora){
        ++empate;
        let contenedor = document.querySelector('.empate');
        contenedor.innerHTML = `Empates: ${empate}`;

    } else if(botones == "piedra" && turnoComputadora == "papel"){
        ++puntosComputadora;
        let compu = document.querySelector('.computadora');
        compu.innerHTML = `Computadora: ${puntosComputadora}`;

    } else if (botones == "piedra" && turnoComputadora == "tijera"){
        ++puntosJugador;
        let user = document.querySelector('.yo');
        user.innerHTML = `Usuario: ${puntosJugador}`;

    }else if(botones == "papel" && turnoComputadora == "piedra"){
        ++puntosJugador;
        let user = document.querySelector('.yo');
        user.innerHTML = `Usuario: ${puntosJugador}`;

    } else if(botones == "papel" && turnoComputadora == "tijera"){
        ++puntosComputadora;
        let compu = document.querySelector('.computadora');
        compu.innerHTML = `Computadora: ${puntosComputadora}`;

    } else if(botones == "tijera" && turnoComputadora == "papel"){
        ++puntosJugador;
        let user = document.querySelector('.yo');
        user.innerHTML = `Usuario: ${puntosJugador}`;

    } else if(botones == "tijera" && turnoComputadora == "piedra"){
        ++puntosComputadora;
        let compu = document.querySelector('.computadora');
        compu.innerHTML = `Computadora: ${puntosComputadora}`;

    }  
}


let botones = document.querySelectorAll(".boton");
for (let i = 0 ; i < botones.length ; i++) {

    botones[i].addEventListener("click", function(){
        turnoJugador = botones[i].value;
        let turnoComputadora = computadora()
        partida(turnoJugador, turnoComputadora);

        if(puntosJugador == 5){
            let ganador = document.querySelector("#ganador");
            ganador.innerHTML = "¡Ganasteeeeeeee!";
            document.getElementById('piedra').disabled = true;
            document.getElementById('papel').disabled = true;
            document.getElementById('tijera').disabled = true;      
        } else if (puntosComputadora == 5){
            let ganador = document.querySelector("#ganador");
            ganador.innerHTML  = "¡Perdisteeeeeeeee!";
            document.getElementById('piedra').disabled = true;
            document.getElementById('papel').disabled = true;
            document.getElementById('tijera').disabled = true;
        }    
    });
}

let reset = document.querySelector(".reset")
reset.addEventListener("click", function(){
    location.reload()
})


  

  
 
 
    
        
   







