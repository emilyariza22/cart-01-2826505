// Array : unico de coleccion 
//         que existe en JS

const meses1 = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Jumio" 
]

const meses2 =[
    "Julio",
    "Agosto",
    "Septiembre"
]
//Funsiones: sprend
const mesesTotal = [...meses1, ...meses2, "octubre"]
console.log(mesesTotal)

const [ mesEnero , mesFebrero ,mesMarzo] = meses1
console.log(mesMarzo)

//Destructuracion(Arreglos- Array)
//Asignar a variables individuales,
//los valores (elementos) en el Array
//diferentes con la de objetos
//- las variables a desestructurar
//  no necesariamente deben corresponder 
//  con los elementos Array 
// - Es posicional
//EJ:


//Trabajar con funciones 
console.log(`el arreglo de meses tiene: ${ mesesTotal.length}`)
//trabajar con includes:
console.log(mesesTotal.incluidos("Enero"))