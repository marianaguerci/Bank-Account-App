class Account {
    constructor(holder, balance, movements){
        this._holder = holder;
        this._balance = balance;
        this._movements = movements;
    }

    get holder() {
        return this._holder;
    }
    get balance() { 
        return this._balance;
    }
    get movements() {
        return this._movements;
    }

    set holder(holder) {
        this._holder = holder;
    }
    set balance(balance) {
        this._balance = balance;
    }
    set movements(movements) {
        this._movements = movements;
    }

    //ingressar(quantitat) : permet ingressar diners en el compte del client i incrementa el número de moviments
    enterMoney(amount, output) {
        this.movements = this.movements + 1;
        console.log(this.movements);
        console.log(amount);
        this.balance = this.balance + amount;
        output.innerHTML = `Se han ingresado ${amount}€ en la cuenta de ${this.holder}.<br>Saldo actual: ${this.balance}€`;
        return this.balance;
    }

    //treure(int quantitat) : permet treure diners del compte sempre que hi hagi prou saldo, també incrementarà el número de moviments.
    withdrawMoney(amount, output) {
        if ((this.balance != 0) && (amount <= this.balance)) {
            this.movements = this.movements + 1;
            console.log(this.movements);
            console.log(amount);
            this.balance = this.balance - amount;
            output.innerHTML = `Se han retirado ${amount}€.<br>Saldo actual: ${this.balance}€`;
        } else {
            output.innerHTML = `No hay saldo suficiente para retirar ${amount}€.<br>Su saldo es de: ${this.balance}€`;
        }
    }

    //Consultar saldo i número de transaccions realitzades
    viewBalance(output) {
        output.innerHTML = `Titular: ${this.holder}<br>Saldo actual: ${this.balance}€<br>Cantidad de movimientos: ${this.movements}`;
    }
}