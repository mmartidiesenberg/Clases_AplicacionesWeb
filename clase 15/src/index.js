//Estructura de control de bucles
//for(let i = 0; i < 10; i++){
//     console.log(i)
//}

//Arreglos
const numeros = [1,2,3,4,5,6]

//Tipos no primitivos y comparación

const numeros1 = [1,2,3]
const numeros2 = [1,2,3]

const numeros3 = [1,2, [2.5], [1,[2]]];


//este es para llegar al 2 que está en azul:
// console.log (numeros3[3][1][0])

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

//Objetos

const persona = {
    //propiedad -> valor
    nombre: 'Martina',
    edad: '20',
    estudia: true,
    redes:[
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros: {
        mascotas: 2
    }
}

console.log(persona.redes[0])
