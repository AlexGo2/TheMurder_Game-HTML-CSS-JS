

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt("Você descobre que seu namorado te traía com ela, mas agora ela quer acabar com os dois. Você tem que tomar uma decisão. Seja rápida, o tempo está acabando...Escolha: (1, 2 ou 3");

        if (opcao == 1) {
            alert('Você vai para cima dela com toda sua fúria, mas ela saca uma arma e te dá um tiro...game over');
            
            
            return location.href = "../gameover.html"
            
    
        }

        else if (opcao == 2) {
            alert('A fumaça do extintor, faz com que ela te perca de vista e você fica invisível. Com uma pedra você a acerta na cabeça e consegue se salvar...');
            return location.href = "../win.html";
            
            
        }
        
        else if (opcao == 3) {
            alert('Ela sabe que você não tem nada, mas quer te machucar a qualquer custo, então ela tira a vida do seu namorado...(escolha opção 1 ou 2)')
            return location.href = "monica3.html";
            
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}


