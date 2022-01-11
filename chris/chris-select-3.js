

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt("Maravilha! Você está na garagem, agora tente roubar o carro do Killer para finalmente fugir. Mas espere ele está logo atrás de você, corra!!! Escolha: (1, 2 ou 3");

        if (opcao == 1) {
            alert('Droga! Sem munição, ache outra saída (escolha: opção 2 ou 3)');
            
            
            return location.href = "chris3.html"
            
    
        }

        else if (opcao == 2) {
            alert('Parabéns! Você conseguiu derrotar Killer o mais temido assassino do mundo.');
            return location.href = "../win.html";
            
            
        }
        
        else if (opcao == 3) {
            alert('O maluco é brabo e você é muito fraco pra ele...Game Over!')
            return location.href = "../gameover.html";
            
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}


