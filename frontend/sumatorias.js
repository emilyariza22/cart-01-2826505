let carrito = [
    {
        id : 1,
        nombre : "Lenovo LEGION",
        precio : 3500000,
        descripcion : "Computador laptop",
        obtenerPrecio : function(){
            return `nombre: ${this.nombre}`
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
        precio : 1500000,
        descripcion : "audifonos de alta fidelidad",
        obtenerPrecio : function(){
            return `nombre: ${this.nombre}`
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
        precio : 2300000,
        descripcion : "telefono inteligente",
        obtenerPrecio : function(){
            return `nombre: ${this.nombre}`
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
        precio : 600000,
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
        precio : 800000,
        descripcion : "telefono inteligente",
        obtenerPrecio : function(){
            return `nombre: ${this.nombre}`
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

let acumulador = 0

//primera version de la sumatoria utilizando ciclo for of

/*for (p of carrito){
    acumulador = acumulador + p.precio
}*/


//segunda version utilizando foreach

/*carrito.forEach(function(p){
    acumulador = acumulador + p.precio
})*/

//ultima version con metodo: reduce

let sumatoria = carrito.reduce(function(acumulador, p){
    return acumulador + p.precio
} , 0 )
console.log(sumatoria)

