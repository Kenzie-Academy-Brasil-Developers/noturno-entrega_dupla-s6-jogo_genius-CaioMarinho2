const botaoVerde=document.createElement('button');
const botaoVermelho=document.createElement('button');
const botaoAmarelo=document.createElement('button');
const botaoAzul=document.createElement('button');

const superiores= document.getElementById('botõesSuperior')
const inferiores= document.getElementById('botõesInferiores')

botaoVerde.id= 'greenButton'
botaoVermelho.id= 'redButton'
botaoVerde.className= 'topButtons'
botaoVermelho.className= 'topButtons'

botaoAmarelo.id= 'yellowButton'
botaoAzul.id= 'blueButton'
botaoAmarelo.className= 'botonButtons'
botaoAzul.className= 'botonButtons'


superiores.appendChild(botaoVerde)
superiores.appendChild(botaoVermelho)
inferiores.appendChild(botaoAmarelo)
inferiores.appendChild(botaoAzul)

//TESTE
const textomeio=document.createElement('p')
textomeio.innerText='Seja bem vindo'
textomeio.className='textodomeio'
const meio= document.getElementById('meio')
meio.appendChild(textomeio)
//TESTE


const removerChild = function(parent,child){
    parent.removerChild(child)
}

/* const alterarTexto = function(parent,child,txt){
    parent.removeChild(child)
    const child = document.createElement('p')
    child.innerText= txt
    parent.appendChild(child)
} */


const botaoIniciar = document.createElement('button')
meio.appendChild(botaoIniciar)

maiorPontuacao = 0
function iniciar() {
    //esconder botaoIniciar
    meio.removeChild(botaoIniciar)

    //Textos iniciais apagando e reescrevendo
    setTimeout(alterarTexto,1000,'meio','textomeio',"Prepare-se e boa sorte")
    

    
    /* 

    //txt pedindo atenção aos botões ascendendo
    setTimeout(alterarTexto,1000,'meio','textomeio',"Preste atenção na sequência")

    placar = 0
    Valores= []

    
    //jogo começa de fato
    For( índice = 0; índice = valores.length; índice++{
    
        //utilizar um número em cada botão, quando número daquele botão aparecer ele deverá ascender
        //iniciar sequencia dos botões ascendendo todos dentro do array
        //aparecer txt 'Sua vez! Repita a sequência na ordem correta!'
        //caso o número do botao clicado seja o mesmo do último ítem valores -> adicionar novo número aleatório em valores
        //aumentar pontuação a cada acerto 
        if(placar > maiorPontuacao){maiorPontuacao = placar}
 
    }
     */
    //jogo finaliza
    //mostrar texto 'Que pena'
    //mostrar placar 'Você conseguiu ${placar}'
    //mostrar maior pontuação 'Maior pontuação: ${maiorPontuacao}'
    //mostrar texto 'A sequência está errada. Tente outra vez!'
    // aparecer botão recomeçar
    
    


    

    
    

}

botaoIniciar.addEventlistener('click', iniciar)