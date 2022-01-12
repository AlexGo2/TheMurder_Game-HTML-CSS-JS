

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt("você está quase saindo do prédio seja, rápido Escolha: (1, 2 ou 3");

        if (opcao == 1) {
            alert('Não! você chamou muita atenção e foi pego (escolha: opção 2 ou 3)');
            
            
            return location.href = "../gameover.html"
            
    
        }

        else if (opcao == 2) {
            alert('Que sorte o vestiário estava vazio e você conseguiu uma roupa de médico, agora você pode sair do hospício.');
            return location.href = "edu3.html";
            
            
        }
        
        else if (opcao == 3) {
            alert('Como um ninja você assassína o médico que faz experiências até a morte nas pessoas. E agora você saiu sem deixar rastros... ')
            return location.href = "../win.html";
            
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}


