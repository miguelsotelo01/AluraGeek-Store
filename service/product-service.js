const ListaProductos = () =>
    fetch('http://localhost:3000/productos').then((respuesta) =>
        respuesta.json()
    )
const agregarProductos = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            imagen,
            categoria,
            nombre,
            precio,
            descripcion,
            id: uuid.v4(),
        }),
    })
}

const eliminarProductos = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE',
    })
}
const detalleProductos = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(
        (respuesta) => respuesta.json()
    )
}
const buscarproductos = (nombre) => {
    return fetch(
        `http://localhost:3000/productos?q=${nombre}`
    ).then((respuesta) => respuesta.json())
}

const editarProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            imagen,
            categoria,
            nombre,
            precio,
            descripcion,
        }),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.error('ha ocurrido un error', err))
}
export const productServices = {
    ListaProductos,
    agregarProductos,
    eliminarProductos,
    detalleProductos,
    editarProducto,
    buscarproductos,
}
