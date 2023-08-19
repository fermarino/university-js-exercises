function checkTypeof(entrada) {
    if (typeof entrada === 'number') {
        if (entrada % 2 === 0) {
            return 'A entrada é um número par.';
        } else {
            return 'A entrada é um número ímpar.';
        }
    } else if (typeof entrada === 'string') {
        return 'A entrada é uma string.';
    } else {
        return 'A entrada não é um número nem uma string.';
    }
}

function result(resultado) {
    alert(resultado);
}

function typeMenu() {
    while (true) {
        const input = prompt('Insira um dado (ou digite "sair" para encerrar):');

        if (input.toLowerCase() === 'sair') {
            alert('Encerrando o programa.');
            break;
        }

        const numero = parseInt(input);
        if (!isNaN(numero)) {
            const resultado = checkTypeof(numero);
            result(resultado);
        } else {
            const resultado = checkTypeof(input);
            result(resultado);
        }
    }
}

typeMenu();
