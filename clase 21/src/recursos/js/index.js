
// import hola from "./productos.js" //no nombrada
//import {productosMascotas, categorias} from './productos.js' //nombrada
import { URL_PRODUCTOS } from "./config.js"
import {filtrarPorTalle, renderizarCatalogo} from "./funciones.js"
import obtenerDatos from "./productos.js"
//import { productosMascotas } from "./productos.js"


console.log('cargado')
//Persistencia
//localStorage.setItem('numero', 1)
//const numero = localStorage.getItem('numero')
//console.log(numero)


const numeros = [1,2,3,4]
const conviertoACadena = JSON.stringify(numeros)
localStorage.setItem('numeros', conviertoACadena)
const miNumeros = localStorage.getItem('numeros')
const convertirEnObjeto = JSON.parse(miNumeros)
console.log(convertirEnObjeto)



const productosMascotas = await obtenerDatos(URL_PRODUCTOS)


//obtener datos

//obtenerDatos(URL_PRODUCTOS).then(()=>{
    //va tpdo lo que dependa de la resolucion de la accion fetch
//})

const productosEnCarro = []
//console.log(contenedorProductos)

//contenedorProductos.textContent = '<h3>Producto 1<h3>'

//contenedorProductos.innerHTML = '<h3>Producto 1<h3>'

const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')
const productosSeleccionados= document.getElementById('productos-seleccionados')

//filtramos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')


//Renderizamos
//renderizarCatalogo(contenedorProductos, productosFiltrados)

//Eventos
botonEvento.addEventListener('click', (evento)=>{
    //console.log(evento)
    //dialogo.show()
    dialogo.showModal()
})

//Aplicar escuchadores a los botones de los productos
const botonesProducto = contenedorProductos.querySelectorAll('.boton-agregar-producto')
//console.log(botonesProducto)

botonesProducto.forEach ((boton)=>{
    //Cuerpo del callback forEach
    boton.addEventListener('click', (evento)=>{
        //Cuerpo del callback (handler) del listener
        const idProducto = parseInt (boton.dataset.id)
        //console.log(idProducto)
        productosEnCarro.push(idProducto)
        console.log(productosEnCarro)
        productosSeleccionados.textContent = productosEnCarro.length
    })

})


