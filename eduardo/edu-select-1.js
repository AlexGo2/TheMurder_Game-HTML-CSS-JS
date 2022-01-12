

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt(' você está em um hospício e querem fazer experimentos com você até a morte, fuja! (escolha 1, 2 ou 3)');

        if (opcao == 1) {
            alert("você tirou o catéter que estava te mantendo hidratado com soro, você morreu lentamente...game over")

            return location.href = "../gameover.html"
    
        }

        else if (opcao == 2) {                      
            alert('Com a bolsa de soro em mãos agora você pode ir para o corredor')
            return location.href = "edu2.html";
            
        }

        else if (opcao == 3) {
            alert('Por aqui não dá! essas grades são muito fortes');
            return location.href = "edu1.html";
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}

 
