

function select(opcao) {
    while (opcao != 1 || opcao != 2 || opcao != 3) {

        var opcao = prompt('Você está em uma casa de campo com seu namorado e uma amiga assassína ciumenta se infiltra na casa para te matar, tente escapar dela. (Escolha: 1, 2 ou 3)');

        if (opcao == 1) {
            alert("Essa não foi uma boa idéia, vocês caíram e sua amiga acabou com vocês...Game over");
            return location.href = "../gameover.html"
    
        }

        else if (opcao == 2) {
            alert('A porta está emperrada, tente outa opção')
            return location.href = "monica1.html";
            
        }

        else if (opcao == 3) {
            alert('Sim, você conseguiu escapar da casa, mas a janela emperrou, as luzese se apagaram e seu namorado ficou preso lá dentro ');
            return location.href = "monica2.html";
        }

        else {
            alert("escolha uma opção válida.")
        }

    }

}

 
