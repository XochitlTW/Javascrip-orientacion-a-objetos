import {cuentaCorriente} from './cuentaCorriente.js';
import {cliente} from './Cliente.js';

const client = new cliente("Leonardo","13158669","145512DS");
console.log(client);

/*client.nombreCliente = "Leonardo";
client.dniCliente = "13158669";
client.rutCliente = "145512DS";*/

const cuentaLeonardo = new cuentaCorriente( client,"1","011" );
/*cuentaLeonardo.numero = "1";
cuentaLeonardo.agencia = "001";
cuentaLeonardo.cliente = client;*/

let saldo = cuentaLeonardo.versaldo();
console.log(`El Saldo actual es ${saldo}`)

saldo = cuentaLeonardo.depositoEnCuenta(200);
console.log(`El Saldo actual es ${saldo}`)

/*saldo = cuentaLeonardo.retirarDeCuenta(100);
console.log(`El Saldo actual es ${saldo}`)

saldo = cuentaLeonardo.depositoEnCuenta(10);
console.log(`El Saldo actual es ${saldo}`);*/

const client2 = new cliente("Maria","13155168","548795DS");
/*client2.nombreCliente = "Maria";
client2.dniCliente = "13155168";
client2.rutCliente = "548795DS"; */
console.log(client2);

const cuentaMaria = new cuentaCorriente(client2, "2", "002");
/*cuentaMaria.numero = "2";
cuentaMaria.agencia = "002";
cuentaMaria.cliente = client2;*/

//console.log(cuentaMaria.cliente);

/*if(cuentaMaria.cliente)
{
    console.log(cuentaMaria.cliente);
}
else
{
    console.log(cuentaMaria);
}

cuentaLeonardo.transferirParaCuenta(50, cuentaMaria);

const saldoMaria = cuentaMaria.versaldo();
console.log('El saldo de (cuentaMaria)' +saldoMaria);

const saldoLeonardo = cuentaLeonardo.versaldo();
console.log(`El Saldo actual es ${saldoLeonardo}`);*/

console.log(cuentaCorriente.cantidadCuentas)
