//Operaciones con arreglos

//const numeros = [5,20,1,8,9]
//const numerosMasUno = []

//numeros.forEach((numero /*, indice, arreglo*/)=>{
//    numerosMasUno.push(numero + 1)
//})
//console.log(numerosMasUno)

//Map -> .map()
const numeros = [5,20,1,8,9]

//const numerosMasUno = numeros.map((numero)=>{
//   return numero
//})
//console.log(numerosMasUno)

const numerosFiltrados = numeros.filter((numero) =>{
    return numero > 7
})

console.log (numerosFiltrados)