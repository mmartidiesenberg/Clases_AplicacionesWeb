const personas = [
    {
        nombre: "Martina",
        edad: 20
    },
    {
        nombre: "José",
        edad: 21
    },
    {
        nombre: "Camila",
        edad: 25
    }
]

//forEach -> no me devuelve nada
//personas.forEach((persona, indice, arreglo) =>{
//    console.log(persona.edad, indice, arreglo)
//})

//map -> devuelve un nuevo arreglo
//const nuevoArregloPersonas = personas.map((persona, indice, arreglo) =>{
//   return{
//       ...persona, //(spread)
//       edad: persona.edad + 1
//   }
//})
//console.log(nuevoArregloPersonas)

//filter -> devuelve un nuevo arreglo
//const nuevoArregloPersonas = personas.filter((persona, indice, arreglo) =>{
//   return persona.edad > 20 //expresión que devuelve true o false
//})
//console.log(nuevoArregloPersonas)

//find -> devuelve el primer elemento que cumple la condición
//personas.find()
const nuevoArregloPersonas = personas.find((persona, indice, arreglo) =>{
    return persona.edad > 20 //expresión que devuelve true o false
})
console.log(nuevoArregloPersonas)
