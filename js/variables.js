//`backtick`
/*variables globales*/ 
var miNombre = `Shei`;
var miApellido = "Diz";
var miSegundoNombre = 'Abril';

/*constantes, variables no modificables*/
const altura = 160;
const colorDeOjos = "marrones";
const fechaNacimiento = "07/01/2000";

/*variables de bloque: pueden cambiar su valor*/
/*igual suelen usar todo let ahora, no var */
let colorDePelo = "castaño";
let peso = 65;

/*saber el tipo de variable*/
let tipoMiApellido = typeof(miApellido);

//break point
console.log(tipoMiApellido);

tipoMiApellido = typeof(altura);
console.log(tipoMiApellido);
/*definir una variable tipo object*/
const maite = {
    name: 'maite',
    edad: 25
};
const matias = {
    name: 'matias',
    fechaNacimiento: Date.now(),
    trabaja: true
}

// a un objeto le puedo agregar atributos "on the fly"
matias.altura = 200
console.log('matias',matias);

//obtengo las claves del objeto matias
console.log('keys',Object.keys(matias)); //de fabrica

maite.hairColor = colorDePelo;
console.log('keys',Object.keys(maite)); //de fabrica

// obtener la fecha de nacimiento de matias (que son milisegundos) y lo voy a convertir a un Date
const fechaNacMatias = Date(matias.fechaNacimiento);

console.log('fecha nac matias ',fechaNacMatias);

//escribir desde este js en el html...
/*document.write(`los datos de matias son:${Object.keys(matias)}`);*/

//JSON.stringify() //esto es de fabrica, agarra un texto y me lo representa en texto
document.write(`los datos de matias son:${JSON.stringify(matias)}`);
/*wa = document.getElementById();*/