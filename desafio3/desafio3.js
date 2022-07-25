"use strict";
// O código abaixo tem alguns erros e não funciona como deveria.
// Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let Saldo = 0;
limparSaldo();
function limparCampoSoma() {
    soma.value = "";
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        Saldo += soma;
        campoSaldo.innerHTML = Saldo.toString();
        limparCampoSoma();
    }
}
function limparSaldo() {
    if (campoSaldo) {
        Saldo = 0,
            campoSaldo.innerHTML = Saldo.toString();
        limparCampoSoma();
    }
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
