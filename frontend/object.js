//crear objetos
// 1. objet literal
//similar a json
const producto1 = {
    id : 1,
    nombre :"Lenovo LEGIN",
    precio : 3500000,
    descripcion : "Computador laptop",
    caracteristicas : {
        dimensiones: {
            largo : 50,
            ancho : 30,
            alto : 1
        },  
    
        fabricacion : {
            pais : "China" ,
            fechaFabricacion: new Date('2023-09-07')
        }
    }
}

const producto2 = {
    garantia: "1 año con fabricante",
    idiomas :[
        "español",
        "ingles",
        "chino"
    ]
}
//Fusiones: operador spread (objetos)...
//          extraer los atributos de un 
//          objeto sin necesidad
//          de crear variables
const objetoCompleto = {
    ...producto1,
    ...producto2
}

// desestructurar el objeto spread
const{ idiomas  } = objetoCompleto
console.log(idiomas[1])

//  desestructuracion:
//  sintaxis que permite aislar 
//  en variables separadas
//  los atributos de un objeto 
//  (sacar los atributos de manera individual)
const { nombre, 
        descripcion,
        precio,
        caracteristicas :
        {dimensiones : { alto } ,
        fabricacion : {pais} }
         } = producto1

//console.log (pais)
// 2. constructor de objetos 