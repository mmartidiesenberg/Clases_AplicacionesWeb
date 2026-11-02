

function renderizarCatalogo(contenedor, productos){
let productosHTML = ""

productos.forEach((producto)=>{
    productosHTML += `
    <article>                 
    <h3>${producto.nombre}</h3>
    <picture>
        <img src="${producto.imagen}" alt="${producto.nombre}>"
    </picture>
    <p>
        ${producto.descripcion}
    </p>
    <ul>
        <li>
            ${producto.talles[0]}
        </li>
        <li>
            ${producto.precio}
        </li>
    </ul>
    <button class="boton-agregar-producto" data-id="${producto.id}">Añadir al carro</button>

    </article>
    `
})
    contenedor.innerHTML = productosHTML

}


function filtrarPorTalle(productos, talle){
    return productos.filter((producto) =>{
        return producto.talles.includes(talle.toUpperCase())
    })
}

//mientras haya un awair hay un async
async function obtenerDatos(url){
    const respuesta = await fetch(url) //<- pedimos un recurso via http
    const datos = await respuesta.json()
    console.log(datos)
}

export {renderizarCatalogo, filtrarPorTalle, obtenerDatos}
