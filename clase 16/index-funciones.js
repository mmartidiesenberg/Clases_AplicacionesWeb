//Funciones
//Función Declaración
//this
//
//function suma(a, b){
    //console.log(5 + 2)
    //return a + b
//}
//
//Invocar/ Llamar/ Ejecutar
//
//let resultado = suma(10, 5)
//console.log(resultado)


//Función Flecha
//const suma = (a, b) =>{
//    return a + b
//}
//let resultado = suma(10,5)
//console.log (resultado)


//Callbacks (cb es de callback)

const a = (cb) =>{
    console.log('Se ejecutó la función a')
    cb()
}

const b = () =>{
    console.log('Se ejecutó el callback que es la función b')
}

const c = () =>{
    console.log('Se ejecutó el callback que es la función c')
}

a(b)

a(c)