
require('colors');
const mostrarMenu=()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("========================".red);
        console.log("Seleccione una opcion ".blue);
        console.log("========================".red);

        console.log(`${'1.'.blue} Crear Tarea`);
        console.log(`${'2.'.blue} Listar Tarea`);
        console.log(`${'3.'.blue} Listar Tareas Completas`);
        console.log(`${'4.'.blue} Listar Tareas Pendientes`);
        console.log(`${'5.'.blue} Completar Tareas`);
        console.log(`${'6.'.blue} Borrar Tareas`);
        console.log(`${'0.'.blue} Salir`);
        /**
         * Paquete que nos proporciona el propio de node
         */
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });

        readline.question('Seleccione una opcion ' , (opt) =>{
            readline.close();
            //se recibira  informacion
            resolve(opt);
        })
    });
    
}

const pausa = ()=>{
    return new Promise(resolve=>{
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readLine.question(`\n Presione ${'Enter'.green} para continuar\n`, (opt)=>{
            readLine.close();
            // Esto resuelve la promesa
            resolve();
        })
    });
}


//modulo Para que la función pueda ser invocada
module.exports = {
    mostrarMenu,
    pausa
}