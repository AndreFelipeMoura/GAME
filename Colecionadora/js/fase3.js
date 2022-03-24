function respostaUm()
{
    var respostaCorreta1= "b";
    
    var maxTentativas = 3;
    var resposta = 1;

    while(resposta <= maxTentativas) {

        var  SelecioneAlternativa = prompt(" Digite sua Alternativa:");
        

        if( respostaCorreta1 == SelecioneAlternativa ) {

            alert("Resposta Correta", + SelecioneAlternativa);
            window.location.assign('win.html')
            
            resposta = maxTentativas; 

        } else if( resposta < 3) {

            alert("Resposta incorreta. Tente novamente");
        }
         else {
            window.location.assign('gameover.html');
            
        }
        
        resposta++; 

    }
}

respostaUm();