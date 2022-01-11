

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt('Você foi sequestrado e acorrentado por um serial killer, tente fugir...(escolha 1, 2 ou 3)');

        if (opcao == 1) {
            alert("Alguém precisa malhar, você parece um franguinho...(Escolha, opção 2 ou 3.");
            return location.href = "chris1.html"
    
        }

        else if (opcao == 2) {
            alert('Cacildis! você cortou seu braço fora!!')
            return location.href = "";
            
        }

        else if (opcao == 3) {
            alert('Sucesso! você se livrou das correntes');
            return location.href = "chris2.html";
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}

 
