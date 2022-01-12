

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt('Droga, os médicos te viram saindo do quarto fuja deles..(escolha 1, 2 ou 3)');

        if (opcao == 1) {
            alert("Você está muito lento! eles te capturaram...Game Over");
            return location.href = "../gameover.html"
            
    
        }

        else if (opcao == 2) {
            alert('Você, não queria mais viver e se entregou...Game Over')
            return location.href = "../gameover.html";
            
            
        }

        else if (opcao == 3) {
            alert('Ótimo você foi muito inteligente, atrapalhou eles e conseguiu entrar no elevador para o primeiro andar');
            return location.href = "edu3.html";
            
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}


