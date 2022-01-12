

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt('Sem luzese na casa e com seu namorado preso lá dentro, você deve tomar uma decisão...(escolha 1, 2 ou 3)');

        if (opcao == 1) {
            alert("Droga! a chuva forte danificou o gerador...(escolha opção 2 ou 3)");
            return location.href = "monica2.html"
            
    
        }

        else if (opcao == 2) {
            alert('Resta pouca luz na casa, você está molhada e vai até o porão, tem rastros de sangue por todo o caminho e derepente você avista ele, ferido e pedindo por ajuda. Mas ela também está lá, com uma cara de sangunária, perversa fazendo o refém... ')
            return location.href = "monica3.html";
            
            
        }

        else if (opcao == 3) {
            alert('Tru Tru Tru! A tempestade acabou com o sinal, vocês estão sem ajuda...');
            return location.href = "monica2.html";
            
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}


