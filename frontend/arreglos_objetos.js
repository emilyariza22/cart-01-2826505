let carrito = [
    {
        id : 1,
        nombre : "Lenovo LEGION",
        categoria : `tecnologia`,
        precio : {
            compra : 1500000,
            venta : 2000000
        },
        descripcion : "Computador laptop",
        obtenerCompra : function(){
            return this.precio.compra
        },
        
        caracteristicas : {
            dimensiones: {
                largo : 50,
                ancho : 30,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 2,
        nombre : "audifonos beats",
        categoria : `tecnologia`,
        precio : {
            compra : 1300000,
            venta : 1800000
        },
        descripcion : "audifonos de alta fidelidad",
        obtenerCompra : function(){
            return this.precio.compra
        },
        caracteristicas : {
            dimensiones: {
                largo : 2,
                ancho : 2,
                alto : 2
            },
            fabricacion : {
                pais : "vietnam",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 3,
        nombre : "motorola g60",
        categoria : `tecnologia`,
        precio : {
            compra : 1100000,
            venta : 1500000
        },
        descripcion : "telefono inteligente",
        obtenerCompra : function(){
            return this.precio.compra
        },
        caracteristicas : {
            dimensiones: {
                largo : 15,
                ancho : 8,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 4,
        nombre : "AMD 5 5600G",
        categoria : `tecnologia`,
        precio : {
            compra : 500000,
            venta : 600000
        },
        descripcion : "procesador pc de torre",
        obtenerPrecio : function(){
            return `nombre: ${this.nombre}`
        },
        caracteristicas : {
            dimensiones: {
                largo : 5,
                ancho : 5,
                alto : 0.5
            },
            fabricacion : {
                pais : "USA",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
    ,
    {
        id : 5,
        nombre : "xiaomi redmi note 11",
        categoria : `tecnologia`,
        precio : {
            compra : 800000,
            venta : 900000
        },
        descripcion : "telefono inteligente",
        obtenerCompra : function(){
            return this.precio.compra
        },
        caracteristicas : {
            dimensiones: {
                largo : 16,
                ancho : 8,
                alto : 1
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
    }
]
/*for ( articulo of carrito){
    

const { nombre, precio } = articulo
let mensaje = `nombre del producto: ${nombre},de precio: ${precio}`
console.log(mensaje)
}*/

//solo funciona con un array
carrito.forEach((articulo)=>{
    /*const{nombre, caracteristicas : {dimensiones : {alto}, fabricacion : {pais}}} = articulo
    console.log(pais);*/

    //console.log(articulo.obtenerPrecio())
})

//map: para crear un nuevo arreglo a partir del original

/*const nombresProducto =
    carrito.map((producto)=>{
        return producto.nombre
})

let articuloChino = carrito.filter((articulo)=>{
    return articulo.caracteristicas.fabricacion.pais == `china`
})*/

//console.log(articuloChino)

//splice para borrar un elemento del carrito:
//quitar los audifonos:
//¿cual es el indice? = 1

const productoInsertar = {
        id : 6,
        nombre : "iphone 15",
        precio : {
            compra : 4000000,
            venta : 4500000
        },
        descripcion : "telefono inteligente",
        obtenerCompra : function(){
            return this.precio.compra
        },
        caracteristicas : {
            dimensiones: {
                largo : 16,
                ancho : 1,
                alto : 15
            },
            fabricacion : {
                pais : "china",
                fechaFabricacion : new Date('2023-09-07')
            }
        }
}

const productoInsertar2 = {
    id : 7,
    nombre : "iphone 15 pro max",
    precio : {
        compra : 5000000,
        venta : 6000000
    },
    descripcion : "telefono inteligente",
    obtenerCompra : function(){
        return this.precio.compra
    },
    caracteristicas : {
        dimensiones: {
            largo : 16,
            ancho : 1,
            alto : 15
        },
        fabricacion : {
            pais : "china",
            fechaFabricacion : new Date('2023-09-07')
        }
    }
}
/*carrito.splice(1, 0, productoInsertar)
console.log(carrito)*/

//añadir un elemento con el spread operator
for(articulo of carrito){
    const{nombre, categoria , caracteristicas : {dimensiones : { alto } , fabricacion : {pais}}} = articulo
    
    console.log(articulo)
}
let acumulador = 0

let sumatoria = carrito.reduce(function(acumulador, p){
    return acumulador + p.precio.compra
} , 0 )

console.log(sumatoria)




let articuloChino = carrito.filter((articulo)=>{
    return articulo.caracteristicas.fabricacion.pais == `china`
})

console.log(articuloChino)

let alturaArticulo = carrito.filter((articulo)=>{
    return articulo.caracteristicas.dimensiones.alto >= 2
})

console.log(alturaArticulo)

let precioMenor = carrito.filter((articulo)=>{
    return articulo.precio.compra >= 10000
})

console.log(precioMenor)





carrito = [...carrito , productoInsertar , productoInsertar2]

//console.log(carrito)

