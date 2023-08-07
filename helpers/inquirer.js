const { green } = require('colors');
const inquirer = require('inquirer');
require('colors');

//envio de informacion automatica
const preguntas = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices:[
            {
                value:'1',
                name:`${'1.'.red} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.red}. Listar tarea`
            },
            {
                value:'3',
                name:`${'3.'.red}. Listar tareas completas`
            },
            {
                value:'4',
                name:`${'4.'.red}. Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.red}. Completar tareas`
            },
            {
                value:'6',
                name:`${'6.'.red}. Borrar tarea`
            },
            {
                value:'0',
                name:`${'0.'.red}. Salir`
            },
        ]
    }
]

const inquirerMenu=async()=>{
    console.clear();
    console.log("========================".red);
    console.log("Seleccione una opcion ".blue);
    console.log("========================\n".red);
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async()=>{
    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presione  ${'enter'.green} para continuar\n`
        }
    ];
    console.log("\n");
    await inquirer.prompt(question);
}

const leerInput = async(message)=>{
    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return "Por favor ingrese un valor";
                }
                return true;
            }
        }
    ];
    //aplicar la desestructuracion
    const{desc} = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}