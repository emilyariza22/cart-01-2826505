//Funcion:
// un bloque de instrucciones
//que se ejecutan al invicarsen 
// tiene 2 momentos
//-Declaracion 
//-Invocacion 
// invocar la funcion , ejecutarla 
saludo("Maia" )//-> argumento
//hoisting
//Primer ej de Funcion 
//Declaracion de funcion 

function saludo(nombre,
                identificacion = 355555){// <-parametro: donde se recibe
    console.log (`hola ${nombre} con id ${identificacion}`)
}
// invocar la funcion , ejecutarla 



 //SEGUNDA MANERA : FUNCION EXPRESION
 //Permitir asignar funciones a variables 

const saludo2 = function(
                nombre=ñero,
                identificacion){
    console.log(`Hola ${nombre}
                 con id ${identificacion}
                 desde saludo 2 `)
}
saludo2("Maia",identificacion = 22222 )

//TERCERA MANERA : Funciones flecha (arrow)
//REGLAS:
//1. si la funcion arrow tiene un solo parametro
//se puede omitir el parentesis
// 2. si la funcion arrow 
//tiene en su bloque de codigo 
// una sola instruccion , se pueden aitir los corhetes
//3. si la funcion arrow 
//tiene una sola instruccion 
// en su bloque de codigo , y esta tiene 

const saludo3 = nombre => `Saludo 
                ${nombre}
                desde funcion arrow`

 

console.log (saludo3("Maia"))