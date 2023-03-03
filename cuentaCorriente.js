import { cliente } from "./Cliente.js";

export

class cuentaCorriente
{
    #cliente;
    agencia;
    numero;
    #saldo;
    static cantidadCuentas = 0;

    set cliente (valor)
    {
        if(valor instanceof cliente)
        {
            this.#cliente = valor;
        }
        
    }

    get cliente()
    {
        return this.#cliente;
    }
    

    constructor(cliente, agencia, numero)
    {
        this.client = cliente;
        this.numero = numero;
        this.agencia= agencia;
        this.#saldo = 0;
        cuentaCorriente.cantidadCuentas ++;
    }

    depositoEnCuenta(valor)
    {
        if(valor > 0)
        {
            this.#saldo += valor;
            return this.#saldo;
        }
  
    }

    retirarDeCuenta(valor)
    {
        if(valor <= this.#saldo)
        {
            this.#saldo -= valor;
            return this.#saldo;
        }
    }

    versaldo()
    {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino)
    {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}