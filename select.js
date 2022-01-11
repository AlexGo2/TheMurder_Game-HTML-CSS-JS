

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt('Escolha: 1- Eduardo , 2 - Mônica ou 3 - Chris');

        if (opcao == 1) {
            return location.href = "eduardo/edu1.html";

        }

        else if (opcao == 2) {
            return location.href = "monica/monica1.html";

        }

        else if (opcao == 3) {
            return location.href = "chris/chris1.html";
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}
// Abaixo excuta a função:
 
