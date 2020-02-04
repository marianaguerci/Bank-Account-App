var account;
var accounts = [];
var output = document.getElementById("text");

//crear cuenta
function createAccount() {
    let holder = prompt("Nombre del titular:");
    let balance = parseInt(prompt("Saldo inicial:"));
    account = new Account(holder, balance, 0);
    accounts.push(account);
    console.log(account);
    console.log(accounts);
}

//ingresar dinero
function enter() {
    let amountMoney = parseInt(prompt("Ingresar €:"));
    let holderName = prompt("Ingrese el nombre del titular");
    let exists;

    for (var i=0; i<accounts.length; i++) {
        if (holderName == accounts[i].holder) {
            accounts[i].enterMoney(amountMoney, output);
            exists = true;
        } else {
            exists = false;
        }
    }
    if(exists == false) {
        output.innerHTML = `El nombre <b>${holderName}</b> no existe en nuestra base de datos.`;
    }
}

//retirar dinero
function withdraw() {
    let amountMoney = parseInt(prompt("Retirar €:"));
    let holderName = prompt("Ingrese el nombre del titular");
    let exists;

    for (var i=0; i<accounts.length; i++) {
        if (holderName == accounts[i].holder) {
            accounts[i].withdrawMoney(amountMoney, output);
            exists = true;
        } else {
            exists = false;
        }
    }
    if(exists == false) {
        output.innerHTML = `El nombre <b>${holderName}</b> no existe en nuestra base de datos.`;
    }
}

//consultar saldo y movimientos
function consult() {
    let holderName = prompt("Ingrese el nombre del titular");

    for (var i=0; i<accounts.length; i++) {
        if (holderName == accounts[i].holder) {
            accounts[i].viewBalance(output);
            exists = true;
        } 
    }
}