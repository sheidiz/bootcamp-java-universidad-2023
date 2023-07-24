const nombre = '1';
const apellido = '1';
const nombre2 = '1';

let val = (nombre === '1') ^ (apellido ==='1') ^ (nombre2 === '1');
console.log(val);
val = (nombre === '1') ^ (apellido ==='1');
console.log(val);
val = (nombre === '1') ^ (apellido ==='1') ^ (nombre2 === '2');
console.log(val);