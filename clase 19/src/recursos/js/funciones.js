

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


export {renderizarCatalogo, filtrarPorTalle}
