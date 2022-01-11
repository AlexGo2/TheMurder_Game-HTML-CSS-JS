

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt('Beleza, Você se livrou das correntes, mas falta muito para escapar do perigo. Vamos achar um jeito de sair do esconderijo do Killer.   (Escolha: 1, 2 ou 3)');

        if (opcao == 1) {
            alert("Você achou uma figurinha do Pelé. Espero que isso seja útil. Pois se nem a xuxa quis o Pelé, eu nem consigo imaginar o por que você o quer XD...(Escolha a opção 2 ou 3)");
            return location.href = "chris2.html"
            
    
        }

        else if (opcao == 2) {
            alert('Você virou o Super-choque, mané...')
            return location.href = "../gameover.html";
            
            
        }

        else if (opcao == 3) {
            alert('Dia de sorte! Você achou a chave da porta da garagem. Essa pode ser sua saída para a liberdade...');
            return location.href = "chris3.html";
            
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}


