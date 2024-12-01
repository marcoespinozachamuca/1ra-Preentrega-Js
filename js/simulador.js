// Simulador interactivo: Trivia de Gustavo Cerati
// Inicialización de LocalStorage
function inicializarLocalStorage() {
    if (!localStorage.getItem("triviaCompletada")) {
        localStorage.setItem("triviaCompletada", false);
    }
    if (!localStorage.getItem("puntuacion")) {
        localStorage.setItem("puntuacion", 0);
    }
    if (!localStorage.getItem("nombreUsuario")) {
        solicitarNombreUsuario();
    } else {
        alert(`¡Hola, ${localStorage.getItem("nombreUsuario")}! Bienvenido/a de nuevo.`);
    }
    console.log("LocalStorage inicializado: ", {
        triviaCompletada: localStorage.getItem("triviaCompletada"),
        puntuacion: localStorage.getItem("puntuacion"),
        nombreUsuario: localStorage.getItem("nombreUsuario")
    });
}

// Función para solicitar el nombre del usuario
function solicitarNombreUsuario() {
    let nombreUsuario = prompt("¡Bienvenido/a! Por favor, ingresa tu nombre:");
    while (!nombreUsuario || nombreUsuario.trim() === "") {
        nombreUsuario = prompt("El nombre no puede estar vacío. Por favor, ingresa tu nombre:");
    }
    localStorage.setItem("nombreUsuario", nombreUsuario.trim());
    alert(`¡Gracias, ${nombreUsuario.trim()}! Ahora puedes disfrutar de la trivia.`);
}

// Reiniciar progreso de LocalStorage
function reiniciarProgreso() {
    localStorage.setItem("triviaCompletada", false);
    localStorage.setItem("puntuacion", 0);
    alert("El progreso de la trivia ha sido reiniciado.");
}

// Preguntas de la trivia
const preguntas = [
    {
        pregunta: "¿En qué año nació Gustavo Cerati?",
        opciones: ["1959", "1963", "1975"],
        respuestaCorrecta: "1959"
    },
    {
        pregunta: "¿Cuál es el nombre de la banda que lideró Gustavo Cerati?",
        opciones: ["Soda Stereo", "Los Redondos", "Los Fabulosos Cadillacs"],
        respuestaCorrecta: "Soda Stereo"
    },
    {
        pregunta: "¿Cuál fue el último álbum de estudio de Gustavo Cerati?",
        opciones: ["Bocanada", "Fuerza Natural", "Siempre es Hoy"],
        respuestaCorrecta: "Fuerza Natural"
    },
    {
        pregunta: "¿Cómo se llama la canción que incluye la frase 'Mereces lo que sueñas'?",
        opciones: ["Puente", "Crimen", "Adiós"],
        respuestaCorrecta: "Puente"
    },
    {
        pregunta: "¿En qué año se realizó el último concierto de Soda Stereo?",
        opciones: ["1997", "2007", "2010"],
        respuestaCorrecta: "1997"
    },
    {
        pregunta: "¿Cuál fue el álbum debut de Gustavo Cerati como solista?",
        opciones: ["Amor Amarillo", "Bocanada", "Siempre es Hoy"],
        respuestaCorrecta: "Amor Amarillo"
    },
    {
        pregunta: "¿Cómo se llama la gira de reencuentro de Soda Stereo en 2007?",
        opciones: ["Gracias Totales", "Me Verás Volver", "Signos"],
        respuestaCorrecta: "Me Verás Volver"
    },
    {
        pregunta: "¿Qué instrumento tocaba principalmente Gustavo Cerati?",
        opciones: ["Batería", "Guitarra", "Teclado"],
        respuestaCorrecta: "Guitarra"
    },
    {
        pregunta: "¿Qué canción de Cerati tiene la frase 'Ahí vamos'?",
        opciones: ["La Excepción", "Adiós", "Crimen"],
        respuestaCorrecta: "La Excepción"
    },
    {
        pregunta: "¿Cuál es el título de la canción que ganó un Grammy Latino como Mejor Canción de Rock en 2007?",
        opciones: ["Crimen", "Puente", "Adiós"],
        respuestaCorrecta: "Crimen"
    },
    {
        pregunta: "¿Cómo se llama el álbum que incluye la canción 'Cactus'?",
        opciones: ["Bocanada", "Fuerza Natural", "Ahí Vamos"],
        respuestaCorrecta: "Fuerza Natural"
    },
    {
        pregunta: "¿Qué disco de Soda Stereo incluye la canción 'Persiana Americana'?",
        opciones: ["Nada Personal", "Signos", "Canción Animal"],
        respuestaCorrecta: "Signos"
    },
    {
        pregunta: "¿Qué frase icónica de Cerati dijo en el último concierto de Soda Stereo?",
        opciones: ["Gracias Totales", "Adiós", "Mereces lo que sueñas"],
        respuestaCorrecta: "Gracias Totales"
    }
    // ... Incluye las otras 10 preguntas de la trivia aquí
];

// Función principal para ejecutar la trivia
function iniciarTrivia() {
    const nombreUsuario = localStorage.getItem("nombreUsuario") || "Usuario";
    alert(`Hola, ${nombreUsuario}. ¡Bienvenido/a a la trivia de Gustavo Cerati!`);

    let puntuacion = 0;

    // Algoritmo con ciclo para iterar sobre las preguntas
    for (let i = 0; i < preguntas.length; i++) {
        const { pregunta, opciones, respuestaCorrecta } = preguntas[i];

        let mensajePregunta = `${i + 1}. ${pregunta}\n`;
        opciones.forEach((opcion, j) => {
            mensajePregunta += `${j + 1}. ${opcion}\n`;
        });

        const respuestaUsuario = prompt(mensajePregunta + "\nIngresa el número de tu respuesta:");

        // Algoritmo con condicional para verificar la respuesta
        if (opciones[parseInt(respuestaUsuario) - 1] === respuestaCorrecta) {
            alert("¡Correcto!");
            puntuacion++;
        } else {
            alert(`Incorrecto. La respuesta correcta era: ${respuestaCorrecta}`);
        }
    }

    // Guardar puntuación en LocalStorage
    localStorage.setItem("puntuacion", puntuacion);
    localStorage.setItem("triviaCompletada", true);

    // Mostrar resultado final
    alert(`Has terminado la trivia. Tu puntuación es: ${puntuacion}/${preguntas.length}`);
    console.log(`Puntuación final: ${puntuacion}`);

    // Preguntar si desea intentar nuevamente si la puntuación no es perfecta
    if (puntuacion < preguntas.length) {
        const reintentar = prompt(
            "¿Quieres intentar nuevamente para mejorar tu puntuación? (Escribe 'si' o 'no')"
        ).toLowerCase();
        if (reintentar === "si") {
            reiniciarProgreso();
            iniciarTrivia(); // Llamada recursiva para reiniciar la trivia
        } else {
            alert("¡Gracias por participar en la trivia!");
        }
    } else {
        alert("¡Felicitaciones! Has contestado correctamente todas las preguntas.");
    }
}

// Verificación inicial para saber si la trivia fue completada
function verificarTrivia() {
    if (localStorage.getItem("triviaCompletada") === "true") {
        const deseaRepetir = prompt(
            "Ya has completado esta trivia. ¿Deseas intentarla nuevamente? (Escribe 'si' o 'no')"
        ).toLowerCase();
        if (deseaRepetir === "si") {
            reiniciarProgreso();
            iniciarTrivia();
        } else {
            alert("¡Gracias por visitar la trivia!");
        }
    } else {
        iniciarTrivia();
    }
}

// Inicializar LocalStorage al cargar el script
inicializarLocalStorage();

// Verificar estado de trivia al inicio
verificarTrivia();
